const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Componente extends Model {}

Componente.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'componente'
})

module.exports = Componente
