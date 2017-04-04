const csrf = require('csurf');

module.exports = (app) => {
  app.use(csrf({ cookie: true }));
};
