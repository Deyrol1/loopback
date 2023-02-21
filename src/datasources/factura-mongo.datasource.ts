import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'factura_mongo',
  connector: 'mongodb',
  url: 'mongodb://root@localhost:27017/loopback_factura',
  host: 'localhost',
  port: 27017,
  user: 'root',
  password: '',
  database: 'loopback_factura',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FacturaMongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'factura_mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.factura_mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
