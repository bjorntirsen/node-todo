const express = require("express");
const router = express.Router();

// Initialize body parser
router.use(express.urlencoded({ extended: true }));

router.get("/delete/:id", (req, res, next) => {
    const id = req.params.id
    for (let i=0; i< req.session.tasks.length; i++) {
        if (id == req.session.tasks[i].id) {
            req.session.tasks.splice(i, 1)
            console.log(`Entry id: ${req.params.id} deleted.`)
        }
    }

    // Write response
    res.redirect('/');
});

module.exports = router;