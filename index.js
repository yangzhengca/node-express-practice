const express = require("express");
const app = express();

// set port number
const PORT = 3000;

// set static path
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

// set view engine
app.set('view engine', 'ejs')

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


// run server
app.listen(PORT, () => console.log(`listening on port ${PORT} ...`));
