const  Donation = require('../models/Donation');

exports.getAllDonations = async () => {
  return await Donation.findAll();
};

exports.getDonationById = async (id) => {
  return await Donation.findByPk(id);
};

exports.createDonation = async (DonationData) => {
  return await Donation.create(DonationData);
};


exports.deleteDonation = async () => {
  await Donation.truncate();
};

exports.deleteDonationById = async (id) => {
  await Donation.destroy({
    where: { id },
  });
};