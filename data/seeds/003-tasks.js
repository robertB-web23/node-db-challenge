exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      project_id: 1, 
      description: 'open can.', 
      completed: true
    },
    {
      project_id: 3, 
      description: 'wash towels', 
      completed: true
    },
    {
      project_id: 2, 
      description: 'sharpen pen', 
      completed: true
    },
    {
      project_id: 4, 
      description: 'Walk Ben to the park and back', 
      completed: true
    }

  ]);
    
};
