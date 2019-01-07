import { Service } from 'egg';

export default class Auth extends Service {
  public signJWTToekn(user) {
    const { app } = this;
    const { secret, algorithm } = app.config.jwt;

    const { id, username, userrole } = user;

    const raw = {
      id,
      username,
      userrole,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['admin', 'user', 'mod'],
        'x-hasura-default-role': userrole,
        'x-hasura-user-id': `${id}`,
        'x-hasura-user-name': username,
      },
    };

    const token = app.jwt.sign(raw, secret, {
      algorithm,
      expiresIn: '2h',
    });

    return token;
  }
}
