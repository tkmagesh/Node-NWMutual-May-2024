import taskDb from './taskDb.js'

(async () => {
  await taskDb.init();
})();

async function getAll(){
    return taskDb.getAll()
}

async function getById(id){
  return taskDb.getById(id)
}

async function save(task){
    if (task.id === 0){
        const newTaskData = { ...task };
        newTaskData.createdAt = new Date();
        return taskDb.createNew(newTaskData)
    } else {
        return taskDb.update(task)
    }
}

async function remove(task){
  return taskDb.remove(task.id)
}

// module.exports = { getAll, getById, save, remove }
let taskService = { getAll, getById, save, remove };
export default taskService