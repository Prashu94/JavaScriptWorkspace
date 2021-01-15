module.exports = {
    HOST: "localhost",
    USER: "prashant",
    PASSWORD: "admin123@",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};