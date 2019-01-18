import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  assets: {
    enable: true,
    package: 'egg-view-assets',
  },

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
