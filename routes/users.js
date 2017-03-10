var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var data = [
            {name: "zhang san", age: 18},
            {name: "li si", age: 19},
        ],

        msg = JSON.stringify(data);

    res.send(msg);
});

module.exports = router;
