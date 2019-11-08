const db = require('../data/db-config.js')


module.exports = {
    findTasks,
    addTask
}


function findTasks() {
    return db("tasks as t")
    .select(
      "p.name as projectName",
      "p.description as projectDescription",
      "t.description as task",
      "t.notes as notes",
      "t.completed"
    )
    .innerJoin("projects as p", "t.project_id", "=", "p.id")
    .orderBy("p.name", "t.id");
}

function addTask(newTask) {
    return db ('tasks').insert(newTask)
}    