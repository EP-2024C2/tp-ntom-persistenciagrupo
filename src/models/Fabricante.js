const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/database");

class Fabricante extends Model {}

Fabricante.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroContacto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pathImgPerfil: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "fabricante",
  },
);

module.exports = Fabricante;
