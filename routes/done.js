const express = require("express");
const router = express.Router();

// Initialize body parser
router.use(express.urlencoded({ extended: true }));

router.get("/done/:id", (req, res, next) => {
    const id = req.params.id
    for (let i=0; i< req.session.tasks.length; i++) {
        if (id == req.session.tasks[i].id) {
            req.session.tasks[i].done ^= true;
            console.log(`Flipped done for entry id: ${req.params.id}.`)
        }
    }

    // Write response
    res.redirect('/');
});

module.exports = router;
