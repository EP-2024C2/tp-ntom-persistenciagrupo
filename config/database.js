const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./data/tienda.sqlite",
});

module.exports = sequelize;