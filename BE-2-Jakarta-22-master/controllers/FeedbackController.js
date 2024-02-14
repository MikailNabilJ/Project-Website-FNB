// controllers/FeedbackController.js
const FeedbackService = require('../services/FeedbackService');

exports.getAllFeedbacks = async (req, res) => {
  try {
    const Feedbacks = await FeedbackService.getAllFeedbacks();
    res.json(Feedbacks);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getFeedbackById = async (req, res) => {
  try {
    const Feedback = await FeedbackService.getFeedbackById(req.params.id);
    res.json(Feedback);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createFeedback = async (req, res) => {
  console.log(req.body)
  const { username, email, category, message} = req.body
  try {
    let result = await FeedbackService.createFeedback({
      username : username,
      email : email,
      category : category,
      message : message
    })   
    console.log(result);
    res.status(201).json({ msg: "Success"})
  }
  catch (error) {
  console.error(error)
   res.status(500).json({ error: "Internal server error" })
 }
};


exports.updateFeedback = async (req, res) => {
  try {
    const updatedFeedback = await FeedbackService.updateFeedback(req.params.id, req.body);
    res.json(updatedFeedback);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    await FeedbackService.deleteFeedback(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteFeedbackById = async (req, res) => {
  try {
    await FeedbackService.deleteFeedbackById(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json(err);
  }
};