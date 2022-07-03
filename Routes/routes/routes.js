const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'dist/', 'index.html'))
})

router.get('/homepage', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'dist/', 'Home Page/', 'index.html'))
})

router.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'dist/', 'Gallery/', 'index.html'))
})

router.get('/tailwind', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'dist/', 'Tail/', 'index.html'))
})

module.exports = router
