const express = require("express");
const app = express();

// set port number
const PORT = 3000;

// set static path
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static("public"));

// set build in middleware to get req.body value
app.use(express.urlencoded( { extended: true }))
// parse json data from req.body
app.use(express.json());

// set view engine
app.set('view engine', 'ejs')

// set middleware, apply to every route under this code
app.use(logger)

// route for render file with status code
app.get('/', (req, res) => {
    res.status(200).render('index')
})

// route for download file
app.get('/download', (req, res) => {
    res.download('./views/index.ejs')
})

// route for sending json data
app.get('/json', (req, res) => {
    res.json({'message': 'hello world'})
})

// set routers for users 
const userRouter = require('./routes/user')
app.use('/users', userRouter)

// middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


// run server
app.listen(PORT, () => console.log(`listening on port ${PORT} ...`));
