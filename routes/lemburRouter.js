const { authJwt } = require("../middleware");
const lemburController = require("../controllers/lemburController.js");

const router = require("express").Router();

router.post("/addLembur", [authJwt.verifyToken], lemburController.addLembur);
router.get("/allLembur", [authJwt.verifyToken], lemburController.getAllLemburs);
router.get("/:id", [authJwt.verifyToken], lemburController.getOneLembur);
router.put("/:id", [authJwt.verifyToken], lemburController.updateLembur);
router.delete("/:id", [authJwt.verifyToken], lemburController.deleteLembur);

module.exports = router;
