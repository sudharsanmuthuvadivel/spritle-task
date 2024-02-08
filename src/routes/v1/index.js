const express = require('express');
// const authRoute = require('./auth.route');
// const userRoute = require('./user.route');
// const docsRoute = require('./docs.route');
// const config = require('../../config/config');
const { sampleRouter } = require('./sample.route');

const router = express.Router();

router.use(sampleRouter);

module.exports = router;
