const { Fabricante } = require('../models');

const fabricanteExists = async (req, res, next) => {
  try {
    
  const { id } = req.params;
  const fabricante = await Fabricante.findByPk(id);
  if (!fabricante) {
    return res.status(404).json({
      message: `Fabricante no encontrado.`
    });
  }
  next();
  } catch{
    res.status(500).json({
      msg: 'Error del servidor',
    });
  }
};

module.exports = {
  fabricanteExists,
};
