let { Router } = require("express");
let {
  addContent,
  allContent,
  fetchSingleContent,
  updateContent,
  deleteContent,
} = require("../controller/contentController");

let router = Router();

router.post("/addContent", addContent);
router.get("/all-content", allContent);
router.get("/single-content/:id", fetchSingleContent);
router.patch("/update-content/:id", updateContent);
router.delete("/delete-content/:id", deleteContent);

module.exports = router;
