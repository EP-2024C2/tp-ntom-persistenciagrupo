const { Router } = require("express");
const productoController = require("../controllers/producto.controllers");
const middleware = require("../middlewares/producto.middleware");

const productRoutes = Router();

productRoutes.get("/", productoController.getProductos);
productRoutes.get(
  "/:id",
  middleware.productoExists,
  productoController.getProductoById,
);
productRoutes.post("/", productoController.createProducto);
productRoutes.put(
  "/:id",
  middleware.productoExists,
  productoController.updateProducto,
);
productRoutes.delete(
  "/:id",
  middleware.productoExists,
  productoController.deleteProducto,
);
productRoutes.post(
  "/:id/fabricantes",
  middleware.productoExists,
  productoController.createProductoFabricante,
);
productRoutes.get(
  "/:id/fabricantes",
  middleware.productoExists,
  productoController.getProductoFabricantes,
);
productRoutes.post(
  "/:id/componentes",
  middleware.productoExists,
  productoController.createProductoComponente,
);
productRoutes.get(
  "/:id/componentes",
  middleware.productoExists,
  productoController.getProductoComponentes,
);

module.exports = productRoutes;
