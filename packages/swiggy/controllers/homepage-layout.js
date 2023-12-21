const HomePageItem = require("../models/homepage-layout");

const restaurantTemplateId = "6582d32603cbb7b897781a92";

const createRestaurantTemplate = async (req, res) => {
      const restaurant = await HomePageItem.create(req.body);
      res.status(201).json(restaurant);
}

const getAllRestaurant = async (req, res) => {
      const restaurants = await HomePageItem.findById({_id:restaurantTemplateId});
      res.status(200).json(restaurants);
}

const createRestaurant = async (req, res) => {
      const restaurant = req.body;
      
      const item = await HomePageItem.updateOne(
           { "_id": restaurantTemplateId },
      { $push : { "card.card.infoWithStyle.restaurants": restaurant }},
      );

      res.status(201).json(item);
}

const updateRestaurants = async (req, res) => {

const {id} = req.params;

const item  = await HomePageItem.updateOne(
      { "_id": restaurantTemplateId, "card.card.infoWithStyle.restaurants._id": id },
      { $set: { "card.card.infoWithStyle.restaurants.$.info": req.body } }
  );

  res.status(200).json(item);
}

const removeRestaurant = async (req, res) => {
      const {id} = req.params;

      const item = await HomePageItem.updateOne(
            {"_id":restaurantTemplateId},
            {$pull: {"card.card.infoWithStyle.restaurants":{"_id":id}}}
      );

      res.status(200).json(item);
}

module.exports = { 
    createRestaurant,
    getAllRestaurant,
    updateRestaurants,
    removeRestaurant,
    createRestaurantTemplate
};