const chai = require('chai');
const r2base = require('r2base');
const r2middleware = require('../index');

const expect = chai.expect;
const app = r2base({ baseDir: __dirname });
app.start()
  .serve(r2middleware, ['responseTime', 'helmet', 'compression', 'bodyParser', 'morgan', 'cors', 'methodOverride', 'cookieParser', 'csurf'])
  .into(app);

const Middleware = app.service('Middleware');

describe('r2middleware', () => {
  describe('express middlewares', () => {
    it('should load responseTime', () => {
      expect(Middleware.responseTime).to.equal('loaded');
    });

    it('should load helmet', () => {
      expect(Middleware.helmet).to.equal('loaded');
    });

    it('should load compression', () => {
      expect(Middleware.compression).to.equal('loaded');
    });

    it('should load bodyParser', () => {
      expect(Middleware.bodyParser).to.equal('loaded');
    });

    it('should load morgan', () => {
      expect(Middleware.morgan).to.equal('loaded');
    });

    it('should load cors', () => {
      expect(Middleware.cors).to.equal('loaded');
    });

    it('should load methodOverride', () => {
      expect(Middleware.methodOverride).to.equal('loaded');
    });

    it('should load cookieParser', () => {
      expect(Middleware.cookieParser).to.equal('loaded');
    });

    it('should load csurf', () => {
      expect(Middleware.csurf).to.equal('loaded');
    });

    it('should load all by default except cors, cookieParser, and csurf', () => {
      const loadAll = r2base({ baseDir: __dirname });
      loadAll.start()
        .serve(r2middleware)
        .into(loadAll);

      expect(loadAll.service('Middleware').responseTime).to.equal('loaded');
      expect(loadAll.service('Middleware').helmet).to.equal('loaded');
      expect(loadAll.service('Middleware').compression).to.equal('loaded');
      expect(loadAll.service('Middleware').bodyParser).to.equal('loaded');
      expect(loadAll.service('Middleware').morgan).to.equal('loaded');
      expect(loadAll.service('Middleware').cors).to.equal(undefined);
      expect(loadAll.service('Middleware').methodOverride).to.equal('loaded');
      expect(loadAll.service('Middleware').cookieParser).to.equal(undefined);
      expect(loadAll.service('Middleware').csurf).to.equal(undefined);
    });
  });
});

