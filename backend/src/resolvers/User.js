import getUserId from '../utils/getUserId';

const User = {
  email: {
    fragment: 'fragment userId on User { id }',
    resolve(parent, args, { request }, info) {
      const userId = getUserId(request);

      if (userId && userId === parent.id) return parent.email;
      return null;
    }
  }
};

export default User;
