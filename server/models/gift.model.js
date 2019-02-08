const mongoose = require('mongoose');

var giftSchema= new mongoose.Schema({
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
    }
});

mongoose.model('Gift',giftSchema);