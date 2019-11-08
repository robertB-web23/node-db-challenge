
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable()
            .unique();
        tbl.string('description', 500)
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 50)
            .notNullable()
            .unique()
        tbl.string('description', 500);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.string('description', 500).notNullable();
        tbl.string('notes', 2000);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');    

    })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
