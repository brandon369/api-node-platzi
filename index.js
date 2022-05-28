const express = require('express')
const bodyParser = require('body-parser')
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.get('/', (req, res) => {
//   res.send('Hey!!! Express')
// })
//
// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hey!!! Express i am a new route')
// })


routerApi(app)

app.listen(port, () => {
  console.log('Executing, port: ' + port)
})
