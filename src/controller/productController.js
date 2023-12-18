import {
    getItemsService,
    createItemService,
    getItemByIdService,
    getItemByNameService,
    deleteItemService,
    updateItemService,
  } from "../service/itemService.js";
  
  const getItemsController = async (req, res) => {
    try {
      const items = await getItemsService();
      if (items.length === 0) {
        return res.status(404).json({
          message: "Items not found",
        });
      }
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  
  const createItemController = async (req, res) => {
    try {
      const newItem = await createItemService(req);
      if (newItem.message) {
        return res.status(400).json({
          message: newItem.message,
        });
      }
      res.status(201).json({
        newItem,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        statuscode: 500,
      });
    }
  };
  
  const getItemByIdController = async (req, res) => {
    try {
      const id = await req.params.id;
      const item = await getItemByIdService(id);
      if (!item) {
        return res.status(404).json({
          message: "Item not found",
        });
      }
      res.json({
        message: "Item found",
        item,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        statuscode: 500,
      });
    }
  };
  
  const getItemByNameController = async (req, res) => {
    try {
      const item = await getItemByNameService(req);
      if (!item) {
        return res.status(404).json({
          message: "Item not found.",
        });
      }
      res.json({
        message: "Item found",
        item,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  
  const updateItemController = async (req, res) => {
    try {
      const updatedItem = await updateItemService(req);
      if (!updatedItem) {
        return res.status(404).json({
          message: "Item not found",
        });
      }
      res.status(201).json(updatedItem);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        statuscode: 500,
      });
    }
  };
  
  const deleteItemController = async (req, res) => {
    try {
      const deletedItem = await deleteItemService(req);
      res.status(200).json(deletedItem);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        statuscode: 500,
      });
    }
  };
  
  export {
    getItemsController,
    getItemByIdController,
    getItemByNameController,
    updateItemController,
    createItemController,
    deleteItemController,
  };