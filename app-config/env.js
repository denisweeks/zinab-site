'use strict';

module.exports = function (env) {
  let port;

  switch (env) {
    case 'develop':
    {
      port = 80;
      break;
    }
    case 'production':
    {
      port = 80;
      break;
    }
    default:
    {
      port = 80;
    }
  }

  return port;
};