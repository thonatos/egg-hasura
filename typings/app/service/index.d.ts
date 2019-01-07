// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth from '../../../app/service/auth';
import ExportUsers from '../../../app/service/users';

declare module 'egg' {
  interface IService {
    auth: ExportAuth;
    users: ExportUsers;
  }
}
