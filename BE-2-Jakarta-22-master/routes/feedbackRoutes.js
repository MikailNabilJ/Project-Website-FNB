// routes/feedbackRoutes.js
const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const router = express.Router();

//Mengembalikan daftar seluruh feedback yang ada.
router.get('/', feedbackController.getAllFeedbacks);
//Mengembalikan feedback dengan id yang telah ditentukan.
router.get('/:id', feedbackController.getFeedbackById);
//Membuat feedback baru.
router.post('/', feedbackController.createFeedback);
//Memperbarui feedback dengan id yang telah ditentukan.
router.put('/:id', feedbackController.updateFeedback);
//Menghapus feedback all yang telah ditentukan.
router.delete('/', feedbackController.deleteFeedback);
//Menghapus feedback dengan id yang telah ditentukan.
router.delete('/:id', feedbackController.deleteFeedbackById);

module.exports = router;