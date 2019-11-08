
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: "Wash the Car",
      description: "Clean the car both interior and exterior.",
      completed: false
  },
  {
    name: "Sweep the floor",
    description: "Remove dust and dirt using a broom.",
    completed: false
},
{
  name: "Learn to draw",
  description: "Learn to draw basic stick figures.",
  completed: false
},
{
  name: "Walk the dog",
  description: "Ben, the family dog, needs daily walks.",
  completed: false
}
    
  ]);
   
};