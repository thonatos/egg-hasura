import * as dotenv from 'dotenv';
import * as path from 'path';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  dotenv.config();

  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '_1546584280632_768';

  config.middleware = [];
  
  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  };

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    defaultExtension: '.nj',
    mapping: {
      '.nj': 'nunjucks',
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public',
    devServer: {
      autoPort: true,
      command: 'umi dev --port={port}',
      env: {
        APP_ROOT: path.join(__dirname, '../app/web'),
        BROWSER: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
      },
      debug: true,
    },
  };

  config.jwt = {
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    secret: process.env.JWT_SECRET || 'JWT_SECRET',
  };

  config.sequelize = {
    dialect: 'postgres',
    database: process.env.DB_NAME || 'hasura',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'hasura',
    password: process.env.DB_PASSWORD || 'hasura',
  };

  const bizConfig = {
    site: {
      register: true,
    },
  };

  return {
    ...config,
    ...bizConfig,
  };
};
