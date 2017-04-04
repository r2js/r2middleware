const bodyParser = require('body-parser');

module.exports = (app) => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true, limit: '16mb' }));

  // parse application/json
  app.use(bodyParser.json());
};
