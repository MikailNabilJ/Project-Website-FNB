const {Critics } = require('../models/feedback');
const {Critics } = require('../models/menu')

const migrateSchema = async function(){
    await Critics.sync()
}

module.exports = {
    migrateSchema
}