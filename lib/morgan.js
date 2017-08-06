const morgan = require('morgan');

module.exports = (app) => {
  const env = app.get('env');

  if (env === 'production') {
    const skip = (req, res) => res.statusCode < 400;
    app.use(morgan('common', { skip }));
  } else if (env !== 'tdd') {
    app.use(morgan('dev'));
  }
};
