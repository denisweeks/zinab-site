'use strict';

module.exports = function (env) {
  let port;

  switch (env) {
    case 'develop':
    {
      port = 3000;
      break;
    }
    case 'production':
    {
      port = 80;
      break;
    }
    default:
    {
      port = 3000;
    }
  }

  return port;
};