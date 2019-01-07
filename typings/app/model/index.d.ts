// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUsers from '../../../app/model/users';

declare module 'sequelize' {
  interface Sequelize {
    Users: ReturnType<typeof ExportUsers>;
  }
}
