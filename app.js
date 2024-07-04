const  express = require('express');

const app = express();

app.get('/api/users',(req, res) => {
    // res.send({"msg":"Hello World"}); 
    //can be sent as a json or a string and many more
    res.status(200).send({"msg": "This is a GET request"}); //sending with a status code
});

app.post('/api/users', (req, res) => {
    res.send("This is a POST request")
});

app.get('/api/student', (req, res) => {
    res.send({"msg": "Hello student"})
});

app.post('/api/student', (req, res) => {
    res.send("Hello post from student")
});

console.log(process.env.PORT);

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});