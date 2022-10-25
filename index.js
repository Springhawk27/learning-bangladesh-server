const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')


app.use(cors())



app.get('/', (req, res) => {
    res.send('Learning Bangladesh is running');
});





app.listen(port, () => {
    console.log('Learning Bangladesh  Server is Running on port ', port);
})