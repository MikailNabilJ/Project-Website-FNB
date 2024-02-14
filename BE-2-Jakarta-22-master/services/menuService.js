// services/menuService.js
const  Menu = require('../models/menu');

exports.getAllMenus = async () => {
  return await Menu.findAll();
};

exports.getMenuById = async (id) => {
  return await Menu.findByPk(id);
};

exports.createMenu = async (menuData) => {
  return await Menu.create(menuData);
};

exports.updateMenu = async (id, menuData) => {
  await Menu.update(menuData, {
    where: { id },
  });
  return await this.getMenuById(id);
};

exports.deleteMenu = async (id) => {
  await Menu.destroy({
    where: { id },
  });
};