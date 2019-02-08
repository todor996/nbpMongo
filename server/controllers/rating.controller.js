const mongoose = require('mongoose');
const _ = require('lodash');

const Rating=mongoose.model('Rating');

module.exports.addRating = (req,res,next) => {
    var rate=alreadyRated(req,res,next);//provera da li je vec taj korisnik ocenio taj poklon
    if(!rate){
        changeRating(req,res,next);
    }
    else{
        var rating=new Rating();
        rating.user=req.body.userId;
        rating.gift=req.body.giftId;
        rating.rating=req.body.rating;

        rating.save((err,doc) => {
            if (!err)
                res.send(doc);
            else {
                return next(err);
            }
        });
    }
}

module.exports.getRatingForGift = (req,res,next) => {
    var sum=0;
    var array=Rating.find({gift:req.giftId});
    array.forEach((item) => {
        sum+=item.rating;
    });
    return sum/array.count;
}

module.exports.alreadyRated = (req,res,next) => {
    return Rating.findOne({gift:req.giftId, user:req.userId});
}

module.exports.changeRating =(req,res,next) => {

    Rating.remove({gift:req.giftId, user:req.userId});
    addRating(req,res,next);
    
}
