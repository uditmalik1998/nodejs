const mongoose = require("mongoose");

const OfferSchema = mongoose.Schema(
  {
    card: {
      card: {
        gridElements: {
          infoWithStyle: {
            info: [
              {
                imageId: { type: String, required: true },
                ctalink: { type: String, default: "" },
                text: { type: String, default: "" },
              },
            ],
          },
        },
        header: { title: { type: String, required: true } },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", OfferSchema);
