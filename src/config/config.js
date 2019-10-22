require('dotenv').config();

module.exports = {
  development: {
    username: 'DB_USERNAME',
    password: 'DB_PASSWORD',
    database: 'DB_NAME',
    host: 'DB_HOST',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};
