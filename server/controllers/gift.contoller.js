const mongoose = require('mongoose');
const _ = require('lodash');

const Gift=mongoose.model('Gift');

module.exports.addGift = (req,res,next) => {
    var gift=new Gift();
    gift.name=req.body.name;
    gift.price=req.body.price;
    gift.description=req.body.description;
    gift.inStock=true;
    gift.category=req.body.category;

    gift.save((err,doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }
    });
}

module.exports.getGiftsFromCategory = (req,res,next) => {
    Gift.find({category:req.category});
}

module.exports.getGiftById = (req, res, next) =>{
    Gift.findOne({ _id: req._id },
        (err, gift) => {
            if (!gift)
                return res.status(404).json({ status: false, message: 'Gift not found.' });
            else
                return res.status(200).json({ status: true, gift : _.pick(gift,['name','price','description']) });
        }
    );
}

module.exports.removeGift = (req,res,next) => {
    Gift.deleteOne({_id:req._id});
}
