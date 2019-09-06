const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  recipes: forwardTo('db'),
};

module.exports = Query;
