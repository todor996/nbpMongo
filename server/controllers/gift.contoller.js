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
    gift.dateAdded=req.body.dateAdded;
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


module.exports.getAllGifts = (req,res,next) => {
    Gift.find((err,gifts)=>{
        if(err)
        res.json({success:false,message:"Error"});
        else
            return res.status(200).json(gifts);
       
    });
}

module.exports.getGiftsById = (req, res, next) =>{
let arr=(req.params.ids).map(el=>mongoose.Types.ObjectId(ele));
console.log(arr);
Gift.find()
    .where('_id')
    .in(arr)
    .exec((err,gifts)=>res.json("POSLATO"));
}

module.exports.removeGift = (req,res,next) => {
    Gift.deleteOne({_id:mongoose.Types.ObjectId(req.params.id)},
        (err,gift)=>{
            if (err){
                res.json({success:false,message:"Not deleted"});
            }
            else if(gift)
            {
               
                res.json({success:true,message:"Successfull remove gift"});
                
            }
            else res.json({success:false});
        }
        );
}

