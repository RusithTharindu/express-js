const  express = require('express');
const app = express();
const user = require('./routers/user')
const student = require('./routers/student');
const morgan = require('morgan');

app.use(express.json()); //using a built-in middleware
app.use(morgan('tiny')); //tiny will show the time for the response
app.use(log); //using the middle ware
app.use('/api/users',userMid, user);
app.use('/api/students',studentMid ,student);

if (app.get('env') === "development") {
    app.use(morgan('dev'));
}


//middleware
function log(req, res, next) {
    console.log('This is a middleware');
    req.id = "10";
    next();
}

function userMid(req, res, next) {
    console.log('This is a middleware for USER');
    next();
}

function studentMid(req, res, next) {
    console.log('This is a middleware for Student');
    next();
}

// console.log(process.env.PORT);
morgan('tiny');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});