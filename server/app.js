const express = require('express')
const authRoutes = require('./routes/auth');
const app = express()

app.get('/', (req, res ) => {
    res.send("<h1>Hello</h1>")
})

const port = process.env.PORT || 8000
app.listen(port , () => {
    console.log(`app is listening on port ${port}` )
})