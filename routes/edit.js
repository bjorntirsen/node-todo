var express = require('express');
var router = express.Router();

// Initialize body parser
router.use(express.urlencoded({extended: true}));

router.get('/edit', (req, res, next) => {
  let tasks = req.session.tasks || [];

  res.render(
    'edit',
    {
      title: 'My Todo-list: Editable view',
      list: tasks
    }
  );
});

router.post('/edit', (req, res, next) => {
  let tasks = [];
  let edited_tasks = req.body.description;
  let biggestId = 1;

  for (item of edited_tasks) {
    let new_task = { id: biggestId, description: item, done: false };
    tasks.push(new_task);
    biggestId++;
  }

  req.session.tasks = tasks;

  res.redirect('/');
});

module.exports = router;
