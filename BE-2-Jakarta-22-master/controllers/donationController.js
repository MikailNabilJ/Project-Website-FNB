// controllers/DonationController.js
const DonationService = require('../services/DonationService');

exports.getAllDonations = async (req, res, next) => {
  try {
    const Donations = await DonationService.getAllDonations();
    res.json(Donations);
  } catch (error) {
    next(error);
  }
};

exports.getDonationById = async (req, res, next) => {
  try {
    const Donation = await DonationService.getDonationById(req.params.id);
    res.json(Donation);
  } catch (error) {
    next(error);
  }
};

exports.createDonation = async (req, res, next) => {
  try {
    const Donation = await DonationService.createDonation(req.body);
    res.json(Donation);
  } catch (error) {
    next(error);
  }
};

exports.updateDonation = async (req, res, next) => {
  try {
    const updatedDonation = await DonationService.updateDonation(req.params.id, req.body);
    res.json(updatedDonation);
  } catch (error) {
    next(error);
  }
};

exports.deleteDonation = async (req, res, next) => {
  try {
    await DonationService.deleteDonation(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

exports.deleteDonationById = async (req, res, next) => {
  try {
    const Donation = await DonationService.getDonationById(req.params.id);
    res.json(Donation);
  } catch (error) {
    next(error);
  }
};