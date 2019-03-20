import bcrypt from 'bcryptjs';
import getUserId from '../utils/getUserId';
import generateToken from '../utils/generateToken';
import hashPassword from '../utils/hashPassword';

const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    const password = await hashPassword(args.data.password);
    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        password
      }
    });

    return {
      user,
      token: generateToken(user.id)
    };
  },
  async login(parent, args, { prisma }, info) {
    const user = await prisma.query.user({
      where: {
        email: args.data.email
      }
    });

    if (!user) {
      throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(args.data.password, user.password);

    if (!isMatch) {
      throw new Error('Unable to login');
    }

    return {
      user,
      token: generateToken(user.id)
    };
  },
  async deleteUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);

    return prisma.mutation.deleteUser(
      {
        where: {
          id: userId
        }
      },
      info
    );
  },
  async updateUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request);

    if (typeof args.data.password === 'string') {
      args.data.password = await hashPassword(args.data.password);
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: args.data
      },
      info
    );
  },
  async createLockbox(parent, args, { prisma }, info) {
    const lockbox = await prisma.mutation.createLockbox({
      data: { ...args.data }
    });

    return lockbox;
  },
  async deleteLockbox(parent, args, { prisma }, info) {
    const lockbox = await prisma.mutation.deleteLockbox({
      where: {
        id: args.id
      }
    });

    return lockbox;
  },
  async createLockboxTransaction(parent, args, { prisma }, info) {
    console.log(args);
    const [lockbox] = await prisma.query.lockboxes({
      where: {
        box: args.data.lockbox
      }
    });
    if (args.transaction === 'DEPOSIT') {
      return prisma.mutation.updateLockbox({
        where: {
          id: lockbox.id
        },
        data: {
          amount: lockbox.amount + args.data.amount
        }
      });
    }
    if (args.data.amount > lockbox.amount) {
      throw new Error(`Insufficient funds`);
    }
    return prisma.mutation.updateLockbox({
      where: {
        id: lockbox.id
      },
      data: {
        amount: lockbox.amount - args.data.amount
      }
    });
  }
};

export default Mutation;
