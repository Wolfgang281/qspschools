let { Router } = require("express");
const {
  addChapter,
  singleChapter,
  updateChapter,
  deleteChapter,
  allChapter,
  particularCourseChapter,
} = require("../controller/chapterController");

let router = Router();

router.post("/add-chapter", addChapter);
router.get("/all-chapter/", allChapter);
router.get("/course-chapter/:id", particularCourseChapter);
router.get("/single-chapter/:id", singleChapter);
router.patch("/update-chapter/:id", updateChapter);
router.delete("/delete-chapter/:id", deleteChapter);

module.exports = router;
