import {Schema, model} from 'mongoose';

const cartSchema = new Schema({
    username: {
        type:String,
        required: [true, 'Username is required'],
    },
    products:{
        type: Array, 
        required:[true, 'Products is required'],
    },
    total:{
        type: Number,
        required:[true, "total is required"]
    },
})

const cartModel = model("Cart", cartSchema)
export default cartModel;