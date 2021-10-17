var express = require("express");

const ProductoController = require("../controllers/ProductoController");

var router = express.Router();

router.get("/", ProductoController.index);
/*
router.get("/:id", CategoriaController.bookDetail);
router.post("/", CategoriaController.bookStore);
router.put("/:id", CategoriaController.bookUpdate);
router.delete("/:id", CategoriaController.bookDelete);
*/

module.exports = router;