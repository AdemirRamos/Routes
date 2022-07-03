const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./Routes/routes')
const path = require('path')

//CSS not working with Node JS: https://stackoverflow.com/questions/48248832/stylesheet-not-loaded-because-of-mime-type

app.use(express.static(path.join(__dirname, '/')))
app.use(routes)

app.listen(port, console.log('The server is running.'))
