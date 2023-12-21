const express = require("express");
const router = express.Router();
const {createRestaurant, getAllRestaurant, updateRestaurants, removeRestaurant, createRestaurantTemplate} = require("../controllers/homepage-layout");

router.route("/").get(getAllRestaurant).post(createRestaurantTemplate);
router.route("/restaurant/:id").post(updateRestaurants).get(removeRestaurant);
router.route("/restaurant").post(createRestaurant);

module.exports = router;

