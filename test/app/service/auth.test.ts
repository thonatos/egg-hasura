import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/auth.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('signJWTToekn', async () => {
    const user = {
      id: 1,
      username: 'suyi',
      userrole: 'mod',
    };

    const result = await ctx.service.auth.signJWTToekn(user);
    assert(result !== undefined);
  });
});
