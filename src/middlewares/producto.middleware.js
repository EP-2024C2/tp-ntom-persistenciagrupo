const { Producto } = require("../models");

const productoExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({
        msg: `No existe un producto con el id ${id}`,
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

module.exports = {
  productoExists,
};
