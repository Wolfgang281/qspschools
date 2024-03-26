let { Router } = require("express");
let {
  addContent,
  allContent,
  fetchSingleContent,
  updateContent,
  deleteContent,
} = require("../controller/schoolController");

let router = Router();

router.post("/addContent", addContent);
router.get("/all-content", allContent);
router.get("/content/:id", fetchSingleContent);
router.patch("/update-content/:id", updateContent);
router.delete("/delete-content/:id", deleteContent);

// router.patch("/update-photo/:id", upload.single("photo"), updatePhoto);

module.exports = router;
