// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiUsers from '../../../app/controller/api/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      users: ExportApiUsers;
    }
  }
}
