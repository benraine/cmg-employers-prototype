const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)
// Add your routes here - above the module.exports line

// router.get('/messages', function(req, res) {
//   res.render('messages/contact-history');
// });

module.exports = router
