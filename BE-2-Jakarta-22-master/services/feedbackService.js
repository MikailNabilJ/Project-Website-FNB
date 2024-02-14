const  Feedback = require('../models/feedback');

exports.getAllFeedbacks = async () => {
  return await Feedback.findAll();
};

exports.getFeedbackById = async (id) => {
  return await Feedback.findByPk(id);
};

exports.createFeedback = async (FeedbackData) => {
  return await Feedback.create(FeedbackData);
};


exports.deleteFeedback = async () => {
  await Feedback.truncate();
};

exports.deleteFeedbackById = async (id) => {
  await Feedback.destroy({
    where: { id },
  });
};