const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("GET request from student");
})

router.post('/', (req, res) => {
    res.status(200).send("POST request from student");
})

router.post('/rem', (req, res) => {
    res.status(404).send({
        "msg": "This is a error from student in form of json",
        "path": "/api/students/rem"
    })
})

module.exports = router;