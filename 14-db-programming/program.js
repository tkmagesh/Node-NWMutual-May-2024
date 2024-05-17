import sqlite3 from "sqlite3";
import { open } from "sqlite";
import SQL from "sql-template-strings";

(async () => {
    // open the database
    const db = await open({
      filename: './db/tasks.db',
      driver: sqlite3.Database
    })

    // query all the data from the db table
    /* 
    const tasks = await db.all('select * from tasks')
    console.log(tasks);  
    */

    // query 1 row from the db table
    const taskId = 2
    const task = await db.get(SQL`select * from tasks where id = ${taskId}`)
    console.log(task);
   
    /* try {
        const result = await db.run("INSERT INTO tasks (name, isCompleted, created_at) VALUES ( :name, :isCompleted, :created_at)", {
            ':name' : "Use Sqlite - new",
            ':isCompleted' : false,
            ':created_at' : new Date()
        });
        console.log(result);
    } catch (err) {
        console.log(err)
    } */

    
    
    try {
        const newTask = {
            name : 'Use sql strings - new',
            isCompleted : false,
            createdAt : new Date()
        }
      const result = await db.run(
        SQL`INSERT INTO tasks (name, isCompleted, created_at) VALUES ( ${newTask.name}, ${newTask.isCompleted}, ${newTask.createdAt})`
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }  
   
   
})()
