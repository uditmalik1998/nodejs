const express = require("express");
const router = express.Router();
const {
  createRestaurant,
  getAllRestaurant,
  updateRestaurants,
  removeRestaurant,
  createRestaurantTemplate,
} = require("../controllers/restaurant-layout");

router.route("/").get(getAllRestaurant).post(createRestaurantTemplate);
router.route("/:id").post(updateRestaurants).get(removeRestaurant);
router.route("/create").post(createRestaurant);

module.exports = router;
