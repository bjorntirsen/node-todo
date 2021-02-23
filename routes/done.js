const express = require("express");
const router = express.Router();

// Initialize body parser
router.use(express.urlencoded({ extended: true }));

router.post("/done", (req, res, next) => {
    //let tasks = req.session.tasks;
    console.dir(req.body);
    console.log('hello')

    // Write response
    res.redirect('/');
});

module.exports = router;
