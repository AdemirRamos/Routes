const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/routes')
const path = require('path')

//CSS not working with Node JS: https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type

app.use(express.static(path.join(__dirname, '/dist')))
app.use(routes)

app.listen(port, console.log('The server is running.'))
