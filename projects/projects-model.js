const db = require('../data/db-config.js');

module.exports = {
    findProjects,
    addProject
}


function findProjects() {
    return db('projects')
}

function addProject(newProject) {
    return db('projects').insert(newProject, 'id')
}