const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

class Producto extends Model {}

Producto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        pathing: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "producto",
    },
);

module.exports = Producto;
