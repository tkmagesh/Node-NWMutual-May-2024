import sqlite3 from "sqlite3";
import { open } from "sqlite";
import SQL from "sql-template-strings";

let db;
async function init() {
  db = await open({
    filename: "./db/tasks.db",
    driver: sqlite3.Database,
  });
}

async function getAll() {
  return db.all("select * from tasks");
}

async function getById(taskId){
    return db.get(SQL`select * from tasks where id = ${taskId}`);
}

async function createNew(newTaskData){
    const result = await db.run(
      SQL`INSERT INTO tasks (name, isCompleted, created_at) VALUES ( ${newTaskData.name}, ${newTaskData.isCompleted}, ${newTaskData.createdAt})`
    );
    const newTask = await getById(result.lastID)
    return newTask;
}

async function update(taskData){
    const result = await db.run(
      SQL`UPDATE TASKS Set name = ${taskData.name}, isCompleted = ${taskData.isCompleted} WHERE id = ${taskData.id}`
    );
    const updatedTask = await getById(result.lastID);
    return updatedTask;
}

async function remove(taskId){
    return db.run(
      SQL`DELETE FROM TASKS WHERE id = ${taskId}`
    );
    
}

let taskDb = { init, getAll, getById, createNew, update, remove };
export default taskDb;
