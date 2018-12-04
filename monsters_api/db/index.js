const {Pool} = require('pg');
const {user,database,host,port} = require('../secrets/db_configuration');

const pool = new Pool({user,host,database,port});
module.exports = pool;