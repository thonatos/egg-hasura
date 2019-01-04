import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/auth', controller.auth.login);
  router.get('/', controller.home.index);  
};
