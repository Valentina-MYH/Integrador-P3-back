import {model, Schema} from 'mongoose'


const productSchema = new Schema ({
    nombre : {
        type: String , 
        required:[true, 'Name is required'] , 
        unique:true
    },
    precio : {
        type:Number ,
        required:[true, 'Price is required'] 
    },
    stock : {
        type:Number ,
        required: [true, 'Stock is required'] 
    },
    marca : {
        type: String ,
        required: [true, 'Marca is required'] 
    },
        categoria : {
        type: String ,
        required: [true, 'Category is required'] 
    },
    descripcion : {
        type: String,
        required: [true, "descripcion es requerida"]
    },
    edadDesde: { 
        type: Number,
        required: [true, "Age from is required"] 
    },
    edadHasta: { 
        type: Number,
        required: [true, "Age to is required"] 
    },
        foto: { 
        type: String,
        required: [true, "Photo is required"] 
    }
})

const ProductModel = model("Product" , productSchema);

export default ProductModel;