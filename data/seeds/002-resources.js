exports.seed = function(knex) {
  return knex('resources').insert([
    {
      name: "wax", 
      description: "Paste used to protect car paint"
    },
    {
      name: "broom", 
      description: "A tool used to sweep"
    },
    {
      name: "pen", 
      description: "A writing tool"
    },
    {
      name: "paper", 
      description: "An object to write on or fashion into figures"
    },
    {
      name: "soap", 
      description: "a substance used to clean"
    },
    {
      name: "leash", 
      description: "a tool used to restrain dogs"
    }
  ]);
    
};