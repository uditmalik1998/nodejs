const express = require("express");
const router = express.Router();
const {
  createOfferTemplate,
  getAllOffers,
  createNewOffer,
  updateOffer,
  deleteOffer,
} = require("../controllers/offers-layout");

router.route("/").post(createOfferTemplate).get(getAllOffers);
router.route("/create").post(createNewOffer);
router.route("/:id").post(updateOffer).get(deleteOffer);

module.exports = router;
