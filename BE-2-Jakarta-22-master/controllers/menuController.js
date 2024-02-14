// controllers/menuController.js
const menuService = require('../services/menuService');

exports.getAllMenus = async (req, res) => {
  try {
    const menus = await menuService.getAllMenus();
    res.json(menus);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMenuById = async (req, res) => {
  try {
    const menu = await menuService.getMenuById(req.params.id);
    res.json(menu);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createMenu= async (req, res) => {
  const { name, price, description, image} = req.body
  try {
    await FeedbackService.createMenu({
      name : name,
      price : price,
      description : description,
      image : image
    })   
    res.status(201).json({ msg: "Success"})
  }
  catch (error) {
  console.error(error)
   res.status(500).json({ error: "Internal server error" })
 }
};

exports.updateMenu = async (req, res) => {
  try {
    const updatedMenu = await menuService.updateMenu(req.params.id, req.body);
    res.json(updatedMenu);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteMenu = async (req, res, next) => {
  try {
    await menuService.deleteMenu(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json(err);
  }
};