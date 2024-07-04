const express = require('express');
const router = express.Router();
const morgan = require('morgan')

//for the api with same route
router.route('/')
.get((req, res) => {
    res.send({"msg": "Hello GET user"});
})

.post((req, res) => {
    // res.send({"msg": "Hello POST user"});

    //using express.json middleware
    // res.send(req.body); 
    //using the built-in middleware (here, without the express.json() middleware, req.body will not give any response)

    res.send(req.body.data) 
    //data is the type of middleware ex: { "data" : "abc" }
    //above response will result, abc

    //using morgon middleware

})

// router.get('/', (req, res) => {
//     res.send({"msg": "Hello GET user"});
//     res.send(req.id);
// });

// router.get('/add', (req, res) => {
//     res.send("Get request user from api/users/add");
// });

router.post('/', (req, res) => {
    res.send({"msg": "Hello POST user"});
});

module.exports = router;