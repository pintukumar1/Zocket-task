const AuthController = require('../controllers/auth')
const express = require('express')

const router = express.Router();

router.post('/earlyaccess', AuthController.EarlyAccess);

router.post('/verifycode', AuthController.VerifyCode);

router.get('/fetchedEmails', AuthController.FetchAllEmails)

module.exports = router