const mongoose = require('mongoose');
const _ = require('lodash');
ObjectID=require('mongodb').ObjectID;
const Gift=mongoose.model('Gift');

module.exports.addGift = (req,res,next) => {
    var gift=new Gift();
    var date=new Date();
    gift.name=req.body.name;
    gift.price=req.body.price;
    gift.description=req.body.description;
    gift.inStock=true;
    gift.category=req.body.category;
    gift.dateAdded=date.getDate();
    gift.discount=req.body.discount;
    gift.imgurl=req.body.imgurl;
    gift.save((err,doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }
    });
}

module.exports.getGiftsFromCategory = (req,res,next) => {
    return Gift.find({category:req.category});
}

module.exports.getAllGifts = (req,res,next) => {
    Gift.find((err,gifts)=>{
        if(err)
        res.json({success:false,message:"Error"});
        else
            return res.status(200).json(gifts);
       
    });
}

module.exports.getGiftById = (req, res, next) =>{
    
    Gift.findOne({ _id: mongoose.Types.ObjectId(req.params.id)},
        (err, gift) => {
            
            if (!gift)
                return res.status(404).json({ status: false, message: 'Gift not found.' });
            else
                return res.status(200).json({ status: true, gift : _.pick(gift,['name','price','description','_id']) });
        }
    );
}

module.exports.removeGift = (req,res,next) => {
    Gift.deleteOne({_id:mongoose.Types.ObjectId(req.params.id)},
        (err,gift)=>{
            if (err){
                res.json({success:false,message:"Not deleted"});
            }
            else if(gift)
            {
                console.log(req.params);
                console.log(gift);
                res.json({success:true,message:"Successfull remove gift"});
                
            }
            else res.json({success:false});
        }
        );
}

