const GameStatistics = require('./gameStatistics.model');
const { NOT_FOUND_ERROR } = require('../../errors/appErrors');

const getAll = async (dateRange, userId) => {
  const { from, to } = dateRange;
  const statistic = await GameStatistics.find({
    userId,
    date: { $gte: from, $lt: to }
  });
  if (!statistic) {
    throw new NOT_FOUND_ERROR('gameStatistic', `userId: ${userId}`);
  }

  return statistic;
};

const save = async statistic => GameStatistics.create(statistic);

module.exports = { getAll, save };
