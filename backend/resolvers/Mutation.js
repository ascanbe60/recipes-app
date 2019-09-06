const Mutation = {
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return user;
  },
  async createRecipe(parent, args, ctx, info) {
    const { title, ingredients, instructions } = args;
    const recipe = await ctx.db.mutation.createRecipe(
      {
        data: {
          title,
          ingredients: {
            set: ingredients,
          },
          instructions: {
            set: instructions,
          },
        },
      },
      info
    );
    return recipe;
  },
  deleteRecipe(parent, args, ctx, info) {
    const where = { id: args.id };
    console.log('INFO!!!', info);
    return ctx.db.mutation.deleteRecipe({ where }, info);
  },
};

module.exports = Mutation;
