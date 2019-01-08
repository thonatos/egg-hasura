import { Application } from 'egg';

export default (app: Application) => {
  const { INTEGER, TEXT } = app.Sequelize;

  const user = app.model.define(
    'users',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: TEXT,
      nickname: TEXT,
      userrole: TEXT,
      salt: TEXT,
      hash: TEXT,
    },
    {
      timestamps: false,
    },
  );

  return user;
};
