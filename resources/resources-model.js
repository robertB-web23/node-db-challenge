const db = require('../data/db-config');

module.exports = {
    findResources,
    addResource
}

function findResources(){
    return db('resources')
}

function addResource(newResource){
    return db('resources').insert(newResource, 'id')
}