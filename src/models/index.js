const Componente = require('./Componente')
const Fabricante = require('./Fabricante')
const Producto = require('./Producto')

Producto.belongsToMany(Componente, {through: 'producto_componente'})
Componente.belongsToMany(Producto, {through: 'producto_componente'})

Producto.belongsToMany(Fabricante, {through: 'producto_fabricante'})
Fabricante.belongsToMany(Producto, {through: 'producto_fabricante'})

module.exports = {
    Componente,
    Fabricante,
    Producto
}