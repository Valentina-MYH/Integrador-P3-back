import ItemModel from "../models/product.model.js";

// Obtener todos los products
const getItemsService = async () => {
  try {
    const items = await ItemModel.find();
    return items;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

// Obtener producto por su ID
const getItemByIdService = async (id) => {
  try {
    const item = await ItemModel.findById(id);
    return item;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

// Obtener un producto por su nombre
const getItemByNameService = async (request) => {
  try {
    const name = request.params.name;

    const item = await ItemModel.findOne({ name: name });
    return item;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};

// Crear un nuevo product
const createItemService = async (req) => {
  try {
    const searchItem = await ItemModel.findOne({ name: req.body.name });
    if (searchItem) {
      return { message: "Item already exists" };
    } else {
      const newItem = await ItemModel.create(req.body);
      return newItem;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

// Actualizar un producto por su ID
const updateItemService = async (request) => {
  const id = request.params.id;
  try {
    const item = request.body;
    const updatedItem = await ItemModel.findByIdAndUpdate(id, item);
    if (!updatedItem) return { message: "Item not found" };
    return { message: "Item already updated", updatedItem };
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

// Eliminar un prod por su ID
const deleteItemService = async (request) => {
  
  const id = request.params.id;
  try {
  
    const deletedItem = await ItemModel.findByIdAndDelete(id);
    
    if (!deletedItem) {
      return { message: "Item not found" };
    } else {
      return { message: "Item deleted", deletedItem };
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

export {
  getItemsService,
  getItemByIdService,
  createItemService,
  updateItemService,
  deleteItemService,
  getItemByNameService,
};