/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const Url = require('url-parse');
const DATABASE_URL = new Url(Env.get('DATABASE_URL'));

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */
    pg: {
      client: 'pg',
      connection: {
        ssl: {
          rejectUnauthorized: false
        }, 
        host: (Env.get('DB_HOST', DATABASE_URL.hostname) as string),
        port: Number(Env.get('DB_PORT', DATABASE_URL.port)),
        user: Env.get('DB_USER', DATABASE_URL.username) as string,
        password: Env.get('DB_PASSWORD', DATABASE_URL.password) as string,
        database: Env.get('DB_DATABASE', DATABASE_URL!.pathname.substr(1)) as string
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },

  }
}

export default databaseConfig