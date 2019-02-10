export interface Gift{
    _id?:String;
    name:String;
    description:String;
    category:String;
    price:Number;
    imgurl:String;
    dateAdded:Date;
    discount:Number;
    inStock:Boolean;
}