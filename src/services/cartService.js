import CartModel from "../models/cart.model.js";
import { getProductByIdService } from './itemService.js';


//OB todos los carritos
const getCartsService = async () => {
  try {
    const carts = await CartModel.find();
    return carts;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};
//cart por id
const getCartByIdService = async (req) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};
//cart por nombre de usuario
const getCartByUsernameService = async (req) => {
  try {
    const cart = await CartModel.findOne({ username: req.params.username });
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};
//agregar prod al carrito
const addProductService = async (req) => {
  try {
    const { idProduct, cantProducts } = req.body;
    const product = await getProductByIdService(idProduct);
    let cartProducts = [];
    for (let i = 0; i < cantProducts; i++) {
      cartProducts.push(product);
    }
    return cartProducts;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const addProductToCartService = async (req) => {
  try {
    const { username } = req.params;
    const { idProduct, cantProducts } = req.body;
    const product = await getProductByIdService(idProduct);
    
    let cartProducts = [];
    for (let i = 0; i < cantProducts; i++) {
      cartProducts.push(product);
    }
    const cart = await CartModel.findOne({ username: username });

    if (!cart) {
      const newCart = await CartModel.create({
        username: username,
        products: cartProducts,
        total: product.price * cantProducts,
      });
      return newCart;
    } else if (cart) {
      cart.products = [...cart.products, ...cartProducts];
      cart.total = cart.total + product.price * cantProducts;
      const updatedCart = await CartModel.findByIdAndUpdate(cart._id, cart);
      return updatedCart;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const deleteCartByIdService = async (req) => {
  try {
    const cart = await CartModel.findByIdAndDelete(req.params.id);
    console.log(cart);
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

export {
  getCartsService,
  getCartByIdService,
  addProductToCartService,
  deleteCartByIdService,
  getCartByUsernameService,
  addProductService
};