const { Timestamp } = require("mongodb");
const mongoose=require('mongoose');

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type:String,
        required: [true, "please add the contact name"],
    },
    email:{
        type:String,
        required:[true, "please add the email adress"],
    },
    phone:{
        type:String,
        required:[true, "please add the phone number"],
    },
},
{
    timestamps:true,
}
    
);

module.exports=mongoose.model("contact", contactSchema);