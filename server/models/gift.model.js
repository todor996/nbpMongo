const mongoose = require('mongoose');
var date=new Date();


var giftSchema = new mongoose.Schema({
    name:
    {
        type:String,
        default:"unknown"
    },
    price:
    {
        type:Number,
        default:0
    },
    description:
    {
        type:String,
        default:""
    },
    inStock:
    {
        type:Boolean,
        default:true
    },
    category:
    {
        type:String,
        default:"unknown"
    },
    dateAdded:{
        type:Date,
        default:date.getDate()
    },
    discount:{
        type:Number,
        default:0,
        max:100,
        min:0
    },
    imgurl:{
        type:String,
        default:"http://tjmartell.org/lib/kcfinder/upload/images/gift.jpeg"
    }
});
module.exports=mongoose.model('Gift',giftSchema);