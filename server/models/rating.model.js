const mongoose= require('mongoose');

var ratingSchema= new mongoose.Schema({
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
    rating:{
        type:Number,
        max:10,
        min:1,
        required:true
    }
});


module.exports=mongoose.model('Rating',ratingSchema);