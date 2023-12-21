const mongoose = require("mongoose");

const HomePageschema = mongoose.Schema({
      card:{
        card:{
            header:{
                title:{type:String, required:[true, "Please Provide Header Name"]},
            },
            infoWithStyle:{
                restaurants:[{
                    info:{
                        avgRating:{type:String, default:"5.0"},
                        cloudinaryImageId:{type:String, default:null},
                        costForTwo:{type:String, default:null, required:[true, 'Please Provide cost for Two']},
                        cuisines:[{type:String}],
                        name:{type:String, required:[true, "Please Provide Item Name"]},
                    }
                }]
            }, 
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("HomePageSchema", HomePageschema);