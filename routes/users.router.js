const express = require('express')
const faker = require("faker");


const router = express.Router()


router.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    req.send("No params")
  }
})


module.exports = router
