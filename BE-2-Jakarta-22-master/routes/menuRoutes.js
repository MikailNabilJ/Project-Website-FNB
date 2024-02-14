// routes/menuRoutes.js
const express = require('express');
const menuController = require('../controllers/menuController');
const router = express.Router();

//Mengembalikan daftar seluruh feedback yang ada.
router.get('/', menuController.getAllMenus);
//Mengembalikan feedback dengan id yang telah ditentukan.
router.get('/:id', menuController.getMenuById);
//Membuat feedback baru.
router.post('/', menuController.createMenu);
//Memperbarui feedback dengan id yang telah ditentukan.
router.put('/:id', menuController.updateMenu);
//Menghapus feedback dengan id yang telah ditentukan.
router.delete('/:id', menuController.deleteMenu);

module.exports = router;