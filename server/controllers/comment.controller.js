const mongoose = require('mongoose');
const _ = require('lodash');

const Comments=mongoose.model('Comment');

module.exports.addComment = (req,res,next) => {
    var comment=new Comments();
    comment.user=mongoose.Types.ObjectId(req.body.user);
    comment.gift=mongoose.Types.ObjectId(req.body.gift);
    comment.comment=req.body.comment;
    comment.dateAdded=req.body.dateAdded;
    console.log(comment);
    comment.save((err,doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }
    });
}

module.exports.getAllCommentsForGift = (req,res,next) => {
    Comments.find({gift:mongoose.Types.ObjectId(req.params.id)},
        (err,comments)=>{
            if(err) res.json({success:false,message:"error"});
            else return res.status(200).json(comments);
        }
        )
}
