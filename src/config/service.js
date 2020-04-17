const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'http://localhost:3333';

export default URL;
