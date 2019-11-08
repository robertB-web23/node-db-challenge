const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();


// GET find Tasks //

router.get('/', (req, res) => {
    Tasks.findTasks()
        .then(tasks => {
            tasks.map(task => {
                if (task.completed === 0){
                    task.completed = false;
                    return task;
                } else {
                    task.completed = true;
                    return task;
                }
            });
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'failed to retreive tasks'})
        })
})

// POST add task //

router.post('/', (req, res) => {
    const newTask = req.body;
    
    console.log(newTask)
    Tasks.addTask(newTask)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add task"})
        });
});




module.exports = router;