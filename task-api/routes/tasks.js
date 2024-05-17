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
})

module.exports = router;