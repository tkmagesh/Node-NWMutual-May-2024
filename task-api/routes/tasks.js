const express = require('express');
const router = express.Router();

// TO BE REFACTORED
let tasks = [
    {id : 1, name : 'Master JavaScript', isCompleted : false, createdAt : new Date()},
    {id : 2, name : 'Plan vacation', isCompleted : true, createdAt : new Date()},
    {id : 3, name : 'Explore Node.js', isCompleted : false, createdAt : new Date()},
]

// configure the routes
router.get('/', function(req, res, next){
    // use 'send()' to send text
    // res.send('All the tasks will be served!')

    // use 'json()' to send json data
    res.json(tasks);
});

router.post('/', function(req, res, next){
    const newTask = req.body;
    console.log(newTask);
    newTask.id = tasks.reduce((prevResult, task) => prevResult > task.id ? prevResult : task.id, 0) + 1;
    newTask.createdAt = new Date();
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.get('/:task_id', function(req, res, next){
    const taskId = parseInt(req.params.task_id)
    const task = tasks.find(task => task.id === taskId);
    if (task){
        res.json(task)
        return
    }
    res.status(404).end()
});

router.delete('/:task_id', function(req, res, next){
    const taskId = parseInt(req.params.task_id);
    const taskToRemove = tasks.find((task) => task.id === taskId);
    if (taskToRemove){
        tasks = tasks.filter(task => task.id !== taskToRemove.id)
        res.status(200).json({})
        return
    }
    res.status(404).json({})
})

router.put("/:task_id", function (req, res, next) {
  const taskId = parseInt(req.params.task_id);
  const taskToUpdate = req.body;
  const existingTask = tasks.find((task) => task.id === taskId);
  if (existingTask) {
    tasks = tasks.map((task) => task.id === taskId ? taskToUpdate : task);
    res.status(200).json(taskToUpdate);
    return;
  }
  res.status(404).json({});
});

module.exports = router;