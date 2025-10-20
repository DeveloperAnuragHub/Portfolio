const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { name, email, message } = req.body
  console.log('Contact form:', name, email, message)
  // TODO: wire to email service
  res.json({ ok: true })
})

module.exports = router
