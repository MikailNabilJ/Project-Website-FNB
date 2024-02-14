// routes/donationRoutes.js
const express = require('express');
const donationController = require('../controllers/donationController');
const router = express.Router();

//Mengembalikan daftar seluruh donation yang ada.
router.get('/', donationController.getAllDonations);
//Mengembalikan donation dengan id yang telah ditentukan.
router.get('/:id', donationController.getDonationById);
//Membuat donation baru.
router.post('/', donationController.createDonation);
//Menghapus donation dengan id yang telah ditentukan.
router.delete('/', donationController.deleteDonation);
//Mengembalikan donation dengan id yang telah ditentukan.
router.delete('/:id', donationController.deleteDonationById);

module.exports = router;