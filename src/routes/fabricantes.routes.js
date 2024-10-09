const { Router } = require("express");
const fabricanteController = require("../controllers/fabricante.controllers");
const middleware = require("../middlewares/fabricante.middleware");

const manufacturerRoutes = Router();

manufacturerRoutes.get("/", fabricanteController.getAllFabricantes);
manufacturerRoutes.get(
  "/:id",
  middleware.fabricanteExists,
  fabricanteController.getFabricanteById,
);
manufacturerRoutes.post("/", fabricanteController.createFabricante);
manufacturerRoutes.put(
  "/:id",
  middleware.fabricanteExists,
  fabricanteController.updateFabricante,
);
manufacturerRoutes.delete(
  "/:id",
  middleware.fabricanteExists,
  fabricanteController.deleteFabricante,
);
manufacturerRoutes.get(
  "/:id/productos",
  middleware.fabricanteExists,
  fabricanteController.getProductosByFabricanteId,
);

module.exports = manufacturerRoutes;
