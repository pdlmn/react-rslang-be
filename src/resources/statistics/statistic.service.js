const statisticRepo = require('./statistic.db.repository');

const get = async (dateRange, userId) => statisticRepo.get(dateRange, userId);

module.exports = { get };
