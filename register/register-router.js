const express = require('express');

const Register = require('./register-model.js');

const router = express.Router();

router.post('/', async (req, res, next) => {

  const data = await Register.addUser(req.body)

  try {
      
        res.status(201).json(data)

  } catch (error) {
      
        console.log(error)

        next(error);
  }

});



module.exports = router;