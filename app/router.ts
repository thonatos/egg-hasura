import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/api/user/register', controller.api.users.register);
  router.post('/api/user/login', controller.api.users.login);
  
  router.get('/docs', controller.home.docs);
  router.get('/auth', controller.home.auth);
  router.get('*', controller.home.index);  
};
