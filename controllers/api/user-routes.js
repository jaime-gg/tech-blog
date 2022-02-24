const router = require('express').Router();
const { User, Post } = require("../../models");

// GET ALL USERS | /API/USERS
router.get('/', (req, res) => {
    // RUN .FIND_ALL() METHOD
    User.findAll({
      //attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;