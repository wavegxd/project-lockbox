import jwt from 'jsonwebtoken';

const generateToken = userId =>
  jwt.sign({ userId }, process.env.TOKEN_SECRET, {
    expiresIn: '7 days'
  });

export default generateToken;
