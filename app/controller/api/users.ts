import { Controller } from 'egg';

export default class UsersController extends Controller {
  public async register() {
    const { ctx, app } = this;

    if (!app.config.site.register) {
      ctx.throw(403, '关闭注册。');
    }

    const { username, userrole, nickname, password } = ctx.request.body;

    const user = await ctx.service.users.create(
      {
        nickname,
        username,
        userrole,
      },
      password,
    );

    ctx.body = {
      data: {
        user,
      },
    };
  }

  public async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;

    const user = await ctx.service.users.login(username, password);

    if (!user) {
      ctx.throw(500, '账号或者密码错误');
    }

    const token = ctx.service.auth.signJWTToekn(user);

    ctx.body = {
      data: {
        user,
        token,
      },
    };
  }
}
