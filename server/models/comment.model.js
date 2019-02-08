const mongoose= require('mongoose');

var commentSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    gift: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'gift'
    },
    comment:{
        type:String,
        default:"",
        required:"Can't post empty comment"
    },
    dateAdded:{
        type:Date,
        required:true
    }
});


module.exports=mongoose.model('Comment',commentSchema);