module.exports = {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
    dialect: 'mysql', // or 'postgres', 'sqlite', etc. depending on your database
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};