const express = require('express');
const router = express.Router();

// Initialize body parser
router.use(express.urlencoded({extended: true}));

/* GET home page. */
router.get('/', (req, res, next) => {
  let tasks = req.session.tasks || [];

  res.render(
    'index',
    {
      title: 'My Todo-list',
      list: tasks
    }
  );
});

router.post('/', (req, res, next) => {
  //Check if tasks exists in cookie session
  let tasks = req.session.tasks || [];
  let description = req.body.item_text;

  req.body.item_text.value = "";

  // Get the biggest id used so far.
  let biggestId = 0;
  for (task of tasks) {
    if (task.id > biggestId) {
      biggestId = task.id;
    }
  }
  biggestId++;

  // Define a new task and add it to the array.
  let new_task = { id: biggestId, description: description, done: false };

  tasks.push(new_task);

  req.session.tasks = tasks;

  // Write response
  res.render(
    'index',
    {
      title: 'My Todo-list',
      list: tasks
    }
  );
})

module.exports = router;
