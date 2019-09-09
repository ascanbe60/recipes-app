const { forwardTo } = require('prisma-binding');

const Query = {
  recipes: forwardTo('db'),
};

module.exports = Query;
