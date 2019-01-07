import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.post('/api/user/register', controller.api.users.register);
  router.post('/api/user/login', controller.api.users.login);
};
