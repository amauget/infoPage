const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'src', 'index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'src', 'about.html'))
}) 

app.get('/contact-me', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'src', 'contact-me.html'))
}) 

//Middleware that catches anything that doesn't meet the above get conditions.
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'src', '404.html'))
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})
