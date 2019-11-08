const router = require('express').Router();

const Projects = require('./projects-model.js');


// GET projects //

router.get('/', (req, res) => {
    Projects.findProjects()
    .then(projects => {
        projects.map(project =>{
            if(project.completed === 0) {
                project.completed = false;
                return project
            } else {
                project.completed = true;
                return project
            }
        })
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      });
})

// POST add a new project //

router.post('/', (req, res) => {
    const newProject = req.body;
    Projects.addProject(newProject)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add project"})
        });
});

module.exports = router;