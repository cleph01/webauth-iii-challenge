const express = require('express');

const restricted = require('../middleware/auth-restricted');

const Users = require('./users-model.js');



const router = express.Router();



router.get('/', restricted, checkRole('executive'), async (req, res, next) => {
  
  try {
      const users = await Users.find()

      res.json(users)

  } catch (error) {
      
        next(error)

        // res.status(500).json({ message: 'Failed to get schemes' });
  }
  
});


function checkRole(role){
    
    return function(req, res, next){
        
        if(req.token && role === req.token.department){

            next();

        }else{

            res.status(403).json({ message: "You have No Access" });

        }
    };
}

module.exports = router;