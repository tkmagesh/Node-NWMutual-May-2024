import express from "express";
import taskService from '../services/taskService.js';
let router = express.Router();

// configure the routes
router.get("/", async function (req, res, next) {
  const tasks = await taskService.getAll();
  res.json(tasks);
});


router.get("/:task_id", async function (req, res, next) {
  const taskId = parseInt(req.params.task_id);
  const task = await taskService.getById(taskId);
  if (task) {
    res.json(task);
    return;
  }
  res.status(404).end();
});

router.post("/", async function (req, res, next) {
  const newTaskData = req.body;
  const newTask = await taskService.save(newTaskData)
  res.status(201).json(newTask);
});


router.delete("/:task_id", async function (req, res, next) {
  const taskId = parseInt(req.params.task_id);
  const taskToRemove = await taskService.getById(taskId)
  if (taskToRemove) {
    await taskService.remove(taskToRemove);
    res.status(200).json({})
    return
  }
  res.status(404).json({});
});

router.put("/:task_id", async function (req, res, next) {
  const taskId = parseInt(req.params.task_id);
  const taskToUpdate = req.body;
  const existingTask = await taskService.getById(taskId)
  if (existingTask) {
    const updatedTask = taskService.save(taskToUpdate)
    res.status(200).json(updatedTask);
    return;
  }
  res.status(404).json({});
});

export default router;