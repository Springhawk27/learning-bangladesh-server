const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')


app.use(cors())


const courses = require('./data/courses.json');
const categories = require('./data/categories.json')


app.get('/', (req, res) => {
    res.send('Learning Bangladesh is running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})


app.get('/courses', (req, res) => {
    res.send(courses);
})




app.listen(port, () => {
    console.log('Learning Bangladesh  Server is Running on port ', port);
})