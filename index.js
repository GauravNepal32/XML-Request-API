
// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

app.get('/ask', (req, res) => {
    setTimeout(() => {
        return res.status(200).json({ bidRate: 0.0001, url: 'https://adsaro.com' })
    }, 2000)
})

// Export the Express API
module.exports = app