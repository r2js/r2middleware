const _ = require('underscore');
const log = require('debug')('r2:middleware');

module.exports = function Middleware(app) {
  const obj = {};
  const list = 'responseTime|helmet|compression|bodyParser|morgan';

  _.each(app.utils.split(list), (middleware) => {
    try {
      require(`./lib/${middleware}`)(app); // eslint-disable-line
      obj[middleware] = true;
      log(`loaded, ${middleware}`);
    } catch (e) {
      log(e);
    }
  });

  return obj;
};
