const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)
// Add your routes here - above the module.exports line
router.get('v2company-details/contact-details', function (req, res) {
    res.redirect('company-details')
  })
  router.get('v2company-details/change-phone-number', function (req, res) {
    res.redirect('sarah-details')
  })

  router.get('v2company-details/change-email', function (req, res) {
    res.redirect('sarah-details')
  })

  router.get('v2company-details/change-name', function (req, res) {
    res.redirect('sarah-details')
  })

  router.get('v2company-details/add-another-contact', function (req, res) {
    res.redirect('added-contact')
  })

  router.get('v2company-details/change-phone-number2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/change-email2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/change-name2', function (req, res) {
    res.redirect('contact-details2')
  })

  router.get('v2company-details/added-contact', function (req, res) {
    res.redirect('company-details2')
  })

  router.get('v2company-details/main-contact', function (req, res) {
    res.redirect('company-details2')
  })

  router.get('v2company-details/postal-address', function (req, res) {
    res.redirect('address-lookup')
  })

  router.get('v2company-details/manual-address', function (req, res) {
    res.redirect('company-details')
  })

module.exports = router
