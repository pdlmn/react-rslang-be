const { OK } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const extractQueryParam = require('../../utils/getQueryNumberParameter');
const statisticService = require('./statistic.service');

router.get('/', async (req, res) => {
  const from = extractQueryParam(req.query.from, 0);
  const to = extractQueryParam(req.query.to, 100000000000000);
  const statistic = await statisticService.get({ from, to }, req.userId);
  res.status(OK).send(statistic);
});

module.exports = router;
