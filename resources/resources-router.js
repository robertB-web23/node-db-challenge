const router = require('express').Router();

const Resources = require('./resources-model.js');





// GET finds resources //

router.get('/', (req, res) => {
    Resources.findResources()
    .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get Resources' });
      });
})

//POST adds a resource //

router.post('/', (req, res) => {
    const newResource = req.body;
    Resources.addResource(newResource)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({message: "Unable to add project"})
        });
});


module.exports = router;