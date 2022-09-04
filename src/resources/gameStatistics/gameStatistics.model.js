const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const GameStatisticSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    gameName: {
      type: String,
      required: true
    },
    learnedWords: {
      type: Number,
      required: true
    },
    date: {
      type: Number,
      default: Date.now()
    },
    correctAnswers: {
      type: Number,
      required: true
    },
    incorrectAnswers: {
      type: Number,
      required: true
    },
    correctAnswersInARow: {
      type: Number,
      required: true
    }
  },
  { collection: 'gameStatistic' }
);

addMethods(GameStatisticSchema);

module.exports = mongoose.model('GameStatistic', GameStatisticSchema);
