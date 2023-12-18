import express from 'express'

import {
    getCarts,
    getCartById,
    addProductCart,
    deleteCartById,
    getCartByUsername,
    addProduct
  } from "../controller/cartController.js";
const routerCart = express.Router(); 

routerCart.get("/carts", getCarts); //obtener todos los carritos
routerCart.get("/cart/:id", getCartById); //Obtener un carrito por ID
routerCart.get("/cart-user/:username", getCartByUsername); // Obtener un carrito por nombre de usuario
routerCart.post("/cart", addProductCart); //agregar un producto al carrito
routerCart.post("/cart/:username", addProduct); //Agregar un producto a un carrito
routerCart.delete("/cart/:id", deleteCartById); //Eliminar un producto por id

export default routerCart;
