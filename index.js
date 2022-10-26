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
});



app.get('/course/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;

    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);

});

app.get('/category/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    if (id === '08') {
        res.send(courses)
    }
    else {
        const category_courses = courses.filter(courses => courses.category_id === id);
        res.send(category_courses);
    }

})




app.listen(port, () => {
    console.log('Learning Bangladesh  Server is Running on port ', port);
})