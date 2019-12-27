const { Pool } = require('pg');

const Database = (function() {
    let db;

    function setupConnection() {
        db = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'C@sper12!!',
            database: 'postgres',
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 2000,
        });
        return db;
    }

    return {
        initDatabase(){
            if(!db){
                db = setupConnection();
            }

            return db;
        }
    }

})();

module.exports = {
    Database,
};