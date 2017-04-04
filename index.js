const log = require('debug')('r2:middleware');
const _ = require('underscore');

module.exports = function Middleware(app, list) {
  const obj = {};
  const getList = list || 'responseTime|helmet|compression|bodyParser|morgan|methodOverride';

  _.each(app.utils.split(getList), (middleware) => {
    try {
      require(`./lib/${middleware}`)(app); // eslint-disable-line
      obj[middleware] = 'loaded';
    } catch (e) {
      log(e);
    }
  });

  return obj;
};
