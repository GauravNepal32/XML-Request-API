
// index.js
const express = require('express')

const app = express()
const requestIp = require('request-ip');
const PORT = 4000
const ipMiddleware = function (req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    req['ip-address'] = clientIp
    next();
};
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
        return res.status(200).json({ bidRate: 0.0001, url: 'https://youtube.com' })
    }, 1000)
})

app.get('/ip', ipMiddleware, (req, res) => {
    res.status(200).json({ ip: req['ip-address'] })
})
app.get('/feed', (req, res) => {
    setTimeout(() => {
        return res.status(200).json({ bidRate: 0.0001, url: 'https://google.com' })
    }, 2000)
})

// Export the Express API
module.exports = app