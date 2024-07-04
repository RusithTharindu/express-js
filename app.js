const  express = require('express');
const app = express();
const user = require('./routers/user')
const student = require('./routers/student')

app.use('/api/users', user);
app.use('/api/students',student)

console.log(process.env.PORT);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});