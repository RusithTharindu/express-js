const  express = require('express');
const app = express();
const user = require('./routers/user')
const student = require('./routers/student')

app.use(log); //using the middle ware
app.use('/api/users', user);
app.use('/api/students',student);

//middleware
function log(req, res, next) {
    console.log('This is a middleware');
    next();
}

console.log(process.env.PORT);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});