const { Router } = require("express");
const componenteController = require("../controllers/componente.controller");
const middleware = require("../middlewares/componente.middleware");

const componentsRoutes = Router();

componentsRoutes.get("/", componenteController.getComponentes);
componentsRoutes.get(
  "/:id",
  middleware.validateComponenteId,
  componenteController.getComponenteById,
);
componentsRoutes.post("/", componenteController.createComponente);
componentsRoutes.put(
  "/:id",
  middleware.validateComponenteId,
  componenteController.updateComponente,
);
componentsRoutes.delete(
  "/:id",
  middleware.validateComponenteId,
  componenteController.deleteComponente,
);
componentsRoutes.get(
  "/:id/productos",
  middleware.validateComponenteId,
  componenteController.getProductosByComponenteId,
);

module.exports = componentsRoutes;
