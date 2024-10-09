const { Componente } = require("../models");

const validateComponenteId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const componente = await Componente.findByPk(id);
    if (!componente) {
      return res.status(404).json({ message: "Componente no encontrado" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = { validateComponenteId };
