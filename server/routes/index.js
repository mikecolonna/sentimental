// Where you will connect your other routers
const express = require('express');
const router = express.Router();
const chalk = require('chalk');

//router.use('/users', require('./user'));
router.use('/tweets', require('./tweets'));

router.use('/*', function (req, res) {
    res.send(500).end();
});

router.use(function(err, req, res, next) {
  console.error(chalk.red(err.stack));
  res.status(err.status).send(err.message);
});

module.exports = router;
