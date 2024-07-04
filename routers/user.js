const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({"msg": "Hello GET user"});
});

router.get('/add', (req, res) => {
    res.send("Get request user from api/users/add");
});

router.post('/', (req, res) => {
    res.send({"msg": "Hello POST user"});
});

module.exports = router;