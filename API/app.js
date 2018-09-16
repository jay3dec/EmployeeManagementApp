const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
/*
app.use(bodyParser.urlencoded({
  extended: true
}))
*/

require('./routes').setup(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))