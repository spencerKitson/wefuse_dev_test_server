const express = require('express');

const router = express.Router({ mergeParams: true });

const { fetchBlogs, fetchBlog } = require('../handlers/blog');

router
  .route('/list')
  .get(fetchBlogs);

router
  .route('/:slug')
  .get(fetchBlog);

module.exports = router;
