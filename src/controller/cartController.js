import {
    getCartsService, 
    getCartByIdService, 
    addProductToCartService, 
    getCartByUsernameService,
    addProductService
} from ""

const getCarts = async (req, res) => {
    try {
      const carts = await getCartsService();
      res.json(carts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getCartById = async (req, res) => {
    try {
      const cart = await getCartByIdService(req);
      res.json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
 
  
  const addProductToCart = async (req, res) => {
    try {
      const addProductToCart = await addProductToCartService(req);
      res.json(addProductToCart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteCartById = async (req, res) => {
    try {
      const deleteCart = await deleteCartByIdService(req);
      res.json(deleteCart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
   const getCartByUsername = async (req, res) => {
    try {
      const cart = await getCartByUsernameService(req);
      res.json(cart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  const addProduct = async (req, res) => {
    try {
      const product = await addProductService(req);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export {
    getCarts,
    getCartById,
    addProductToCart,
    deleteCartById,
    getCartByUsername,
    addProduct
  };