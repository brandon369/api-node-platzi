const express = require('express')
const bodyParser = require('body-parser')
const routerApi = require('./routes')

const  {errorHandler, logErrors, boomErrorHandler} = require('./middlewares/error.handler')

const cors = require('cors');


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


const whitelist = ['http://127.0.0.1:8080', 'https://myapp.co','http://localhost:3000/'];
const options = {
  origin: (origin, callback)  => {
    console.log('originnnnn ===========')
    console.log(origin)
    console.log('originnnnn')
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Executing, port: ' + port)
})
