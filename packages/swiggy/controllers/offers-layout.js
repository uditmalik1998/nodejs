const OfferSchema = require("../models/offers-layout");

const offerTemplateId = "65841134c7368d6207090fc2";

const createOfferTemplate = async (req, res) => {
  const items = await OfferSchema.create(req.body);
  res.status(200).json(items);
};

const getAllOffers = async (req, res) => {
  const items = await OfferSchema.findOne({ _id: offerTemplateId });
  res.status(200).json(items);
};

const createNewOffer = async (req, res) => {
  const items = await OfferSchema.updateOne(
    { _id: offerTemplateId },
    {
      $push: { "card.card.gridElements.infoWithStyle.info": req.body },
    }
  );
  res.status(200).json(items);
};

const updateOffer = async (req, res) => {
  const { id } = req.params;

  const offer = await OfferSchema.updateOne(
    {
      _id: offerTemplateId,
      "card.card.gridElements.infoWithStyle.info._id": id,
    },
    {
      $set: {
        "card.card.gridElements.infoWithStyle.info.$.imageId": req.body.imageId,
        "card.card.gridElements.infoWithStyle.info.$.text": req.body.text,
        "card.card.gridElements.infoWithStyle.info.$.ctalink": req.body.ctalink,
      },
    }
  );

  res.status(200).json(offer);
};

const deleteOffer = async (req, res) => {
  const { id } = req.params;

  const offer = await OfferSchema.updateOne(
    {
      _id: offerTemplateId,
    },
    {
      $pull: { "card.card.gridElements.infoWithStyle.info": { _id: id } },
    }
  );
  res.status(200).json(offer);
};

module.exports = {
  createOfferTemplate,
  getAllOffers,
  createNewOffer,
  updateOffer,
  deleteOffer,
};
