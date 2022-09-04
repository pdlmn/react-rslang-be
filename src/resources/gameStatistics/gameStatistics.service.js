const gameStatisticsRepo = require('./gameStatistics.db.repository');

const getAll = async (dateRange, userId) =>
  gameStatisticsRepo.getAll(dateRange, userId);

const save = async (statistics, userId) =>
  gameStatisticsRepo.save({ ...statistics, userId });

module.exports = { getAll, save };
