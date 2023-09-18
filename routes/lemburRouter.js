const lemburController = require("../controllers/lemburController.js");

const router = require("express").Router();

router.post("/addLembur", lemburController.addLembur);
router.get("/allLembur", lemburController.getAllLemburs);
router.get("/:id", lemburController.getOneLembur);
router.put("/:id", lemburController.updateLembur);
router.delete("/:id", lemburController.deleteLembur);

module.exports = router;
