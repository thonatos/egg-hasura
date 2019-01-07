import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  jwt: {
    enable: true,
    package: 'egg-jwt',
  },

  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};

export default plugin;
