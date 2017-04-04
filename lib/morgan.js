const morgan = require('morgan');

module.exports = (app) => {
  if (app.get('env') === 'production') {
    const skip = (req, res) => res.statusCode < 400;
    app.use(morgan('common', { skip }));
  } else {
    app.use(morgan('dev'));
  }
};
