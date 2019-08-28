require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  () => {
    console.log(`Server is running on http://localhost:4000`);
  }
);
