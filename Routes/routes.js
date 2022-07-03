const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'))
})

router.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Home Page/', 'index.html'))
})

router.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Gallery/', 'index.html'))
})

router.get('/tailwind', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Tailwind CSS/', 'index.html'))
})

module.exports = router
