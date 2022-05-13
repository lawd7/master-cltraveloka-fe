const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mongodb',
    }
);

(async() => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error){
        console.log('Unable to connect to the database', error);
    }
})();

module.exports = sequelize;