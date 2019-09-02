// Checks dev mode
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

// Retrieves API keys from .env file
const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const axios = require('axios')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

// Weather Information POST to fetch
app.post('/weather', (req, res) => {
    const urlWeather = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${req.body.latitude},${req.body.longitude}?units=us`
    axios({
        url: urlWeather,
        responseType: 'json'
    }).then(data => res.json(data.data))
    console.log(req.body)
})

// News Headlines POST to fetch
app.post('/news', (req, res) => {
    const urlNews = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${NEWS_API_KEY}`
    axios({
        url: urlNews,
        responseType: 'json'
    }).then(newsData => res.json(newsData.data))
    console.log(req.body)
})

// Port to start server
app.listen(3001, () => {
    console.log('Server started')
})