const express = require('express');

const router = express.Router({ mergeParams: true });

const { fetchHomedata } = require('../handlers/home');

router
  .route('/')
  .get(fetchHomedata);

module.exports = router;
