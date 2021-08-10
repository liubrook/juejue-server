/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1628057225386_7468';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'P@ssw0rd',
      database: 'juejue-cost',
    },
    app: true,
    agent: false,
  };

  config.multipart = {
    mode: 'file',
  };

  config.cors = {
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  config.security = {
    csrf: {
      enable: false,
      headerName: 'authorization',
      cookieName: 'authorization',
      sessionName: 'authorization',
      ignore: ['/api/user/register', '/api/user/login'],
    },
    domainWhiteList: ['*']
  };

  config.jwt = {
    secret: 'juejue-egg',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload',
  };

  return {
    ...config,
    ...userConfig,
  };
};
