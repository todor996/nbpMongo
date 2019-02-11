const mongoose = require('mongoose');
const _ = require('lodash');

const Rating=mongoose.model('Rating');

module.exports.addRating = (req,res,next) => {
        var rating=new Rating();
        
        rating.user=mongoose.Types.ObjectId(req.body.user);
        rating.gift=mongoose.Types.ObjectId(req.body.gift);
        rating.rating=req.body.rating;
        Rating.find({user:mongoose.Types.ObjectId(req.body.user),gift:mongoose.Types.ObjectId(req.body.gift)},(err,ratings)=>{
            if(ratings!=[])
              res.json({success:false,message:"already rated"});
            else
            
                rating.save((err,doc) => {
                    if (!err)
                        res.send(doc);
                    else {
                        return next(err);
                    }
                });
            
        })
    }
        

module.exports.getRatingForGift = (req,res,next) => {
    Rating.find({gift:mongoose.Types.ObjectId(req.params.id)},(err,ratings)=>{
        if(!ratings)
        return res.status(404).json({success:false,message:"error"});
        else return res.status(200).json(ratings);
    });
  
}



