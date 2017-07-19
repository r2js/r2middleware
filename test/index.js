const chai = require('chai');
const r2base = require('r2base');
const r2middleware = require('../index');

const expect = chai.expect;
const app = r2base({ baseDir: __dirname });
app.start()
  .serve(r2middleware)
  .into(app);

const Middleware = app.service('Middleware');

describe('r2middleware', () => {
  describe('express middlewares', () => {
    it('should load responseTime', () => {
      expect(Middleware.responseTime).to.equal(true);
    });

    it('should load helmet', () => {
      expect(Middleware.helmet).to.equal(true);
    });

    it('should load compression', () => {
      expect(Middleware.compression).to.equal(true);
    });

    it('should load bodyParser', () => {
      expect(Middleware.bodyParser).to.equal(true);
    });

    it('should load morgan', () => {
      expect(Middleware.morgan).to.equal(true);
    });
  });
});

