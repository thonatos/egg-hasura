import { Service } from 'egg';
import * as crypto from 'crypto';

export default class Users extends Service {
  public async create(user, password = '') {
    const { ctx } = this;
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .createHmac('sha256', salt)
      .update(password)
      .digest('hex');

    user.salt = salt;
    user.hash = hash;

    return await ctx.model.Users.create(user);
  }

  public async login(username: string, password: string) {
    const { ctx } = this;

    const user = await ctx.model.Users.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return false;
    }

    const hash = crypto
      .createHmac('sha256', user['salt'])
      .update(password)
      .digest('hex');

    return hash === user['hash'] ? user : null;
  }
}
