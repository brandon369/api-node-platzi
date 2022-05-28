const express = require('express')
const ProductService = require('./../services/product.service')

const router = express.Router()
const service = new ProductService()

router.get('/', async (req, res) => {
  const {size} = req.query;
  const products = await service.find()
  res.json(products)

})


router.get('/filter', (req, res) => {
  res.send('filter')
})


router.get('/:id', async (req, res) => {

  const {id} = req.params;
  const product = await service.findOne(id)

  res.json(product)
})


router.post('/', async (req, res) => {
  try {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)
  } catch (e) {
    res.status(404).json({
      message: e
    })
  }


})


router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body
  const product = await service.update(id, body)
  res.json(product)

})

/*
router.put('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body
  console.log(req)
  res.json({
    message: "updated",
    id,
    data: body,
  })

})

*/

router.delete('/:id', async (req, res) => {

  try {
    const {id} = req.params;
    const product = await service.delete(id)
    res.json(product)

  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})


module.exports = router
