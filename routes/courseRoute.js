let { Router } = require("express");
const {
  addCourse,
  allCourse,
  fetchSingleCourse,
  updateCourse,
  deleteCourse,
} = require("../controller/courseController");

let router = Router();

router.post("/add-course", addCourse);
router.get("/all-course", allCourse);
router.get("/single-course/:id", fetchSingleCourse);
router.patch("/update-course/:id", updateCourse);
router.delete("/delete-course/:id", deleteCourse);

module.exports = router;
