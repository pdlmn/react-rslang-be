const GameStatistics = require('../gameStatistics/gameStatistics.model');

const get = async (dateRange, userId) => {
  const { from, to } = dateRange;
  const aggregatedGameStats = await GameStatistics.aggregate([
    { $match: { date: { $gte: from, $lte: to } } },
    {
      $group: {
        _id: '$userId',
        learnedWords: { $sum: '$learnedWords' },
        newWords: { $sum: '$newWords' }
      }
    }
  ]);

  const userGameStats = aggregatedGameStats.find(gs => gs._id === userId);

  if (!userGameStats) {
    return { learnedWords: 0, newWords: 0 };
  }

  const { learnedWords, newWords } = userGameStats;

  return { learnedWords, newWords };
};

module.exports = { get };
