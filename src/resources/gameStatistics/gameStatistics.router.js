const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const { gameStatistics } = require('../../utils/validation/schemas');
const { validator } = require('../../utils/validation/validator');
const extractQueryParam = require('../../utils/getQueryNumberParameter');

const gameStatisticsService = require('./gameStatistics.service');

router.get('/', async (req, res) => {
  console.log('heh');
  const from = extractQueryParam(req.query.from, 0);
  const to = extractQueryParam(req.query.to, 100000000000000);
  const statistics = await gameStatisticsService.getAll(
    { from, to },
    req.userId
  );
  res.status(OK).send(statistics.map(s => s.toResponse()));
});

router.post('/', validator(gameStatistics, 'body'), async (req, res) => {
  const word = await gameStatisticsService.save(req.body, req.userId);
  res.status(OK).send(word.toResponse());
});

module.exports = router;
