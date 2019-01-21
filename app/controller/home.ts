import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('react.nj', {
      title: 'Egg.js for Hasura',
      message: 'Egg.js for Hasura.',
    });
  }

  public async docs() {
    const { ctx } = this;
    await ctx.render('docs.nj', {
      title: 'Egg.js for Hasura',
      message: 'Egg.js for Hasura.',
    });
  }

  public async auth() {
    const { ctx } = this;
    await ctx.render('auth.nj', {
      title: 'Egg.js for Hasura',
      message: 'Egg.js for Hasura.',
    });
  }
}
