var express = require("express");

const CategoriaController = require("../controllers/CategoriaController");

var router = express.Router();

router.get("/", CategoriaController.index);
/*
router.get("/:id", CategoriaController.bookDetail);
router.post("/", CategoriaController.bookStore);
router.put("/:id", CategoriaController.bookUpdate);
router.delete("/:id", CategoriaController.bookDelete);
*/

module.exports = router;