import { Controller } from 'egg';

export default class AuthController extends Controller {
  public async login() {
    const { ctx, app } = this;
    const { secret, algorithm } = app.config.jwt;

    const raw = {
      id: '1',
      name: 'suyi',
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['admin', 'user', 'mod'],
        'x-hasura-default-role': 'mod',
        'x-hasura-user-id': '1',
        'x-hasura-user-name': 'suyi',
      },
    };

    const token = app.jwt.sign(raw, secret, {
      algorithm,
      expiresIn: '2h',
    });

    ctx.body = {
      raw,
      token,
    };
  }
}
