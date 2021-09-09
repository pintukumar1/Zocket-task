const express = require('express')
const authRoutes = require('./routes/auth');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended:true}));

app.use('/auth',authRoutes)

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}

const port = process.env.PORT || 8000

app.listen(port , () => {
    console.log(`app is listening on port ${port}` )
})