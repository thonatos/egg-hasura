import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('home.nj', {
      title: 'Egg.js for Hasura',
      message: 'Egg.js for Hasura.',      
    });
  }
}
