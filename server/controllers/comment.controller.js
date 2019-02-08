const mongoose = require('mongoose');
const _ = require('lodash');

const Comments=mongoose.model('Comment');

module.exports.addComment = (req,res,next) => {
    var comment=new Comments();
    var date=new Date();
    comment.user=req.body.userId;
    comment.gift=req.body.giftId;
    comment.comment=req.body.comment;
    comment.dateAdded=date.getDate();
    
    comment.save((err,doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }
    });
}

module.exports.getAllCommentsForGift = (req,res,next) => {
    return Comments.find({gift:req.giftId}).sort((a,b)=>{return a.dateAdded>b.dateAdded});
}
