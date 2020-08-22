const express = require('express');
const router = express.Router();
const axios = require('axios');
const users_func = require('../../services/users_services');
const mock_data = require('../../data/mock_data');


// endpoint for getting all users informations
router.get('/', async function (req, res) {
  try {
    user_list = await users_func.get_users();
    res.json(user_list);
  } catch (error) {
    console.error(error);
    res.send("Sorry! an Error occured, please try again.");
  }
});


// endpoint for getting a specific user information (by id). it first checks if user id exists.
router.get('/:id', async function (req, res) {
  const found = await users_func.check_user(req.params.id);
  if (found != false) {
    res.json(found.filter(member => member.id === parseInt(req.params.id)));
  }
  else res.send("Sorry! no id matched!");

});


// endpoint for updating a user by it's id
router.put('/:id', async function (req, res) {
  try {
    const found = await users_func.check_user(req.params.id);
    if (found != false) {
      const response = await users_func.update_user(req.params.id, mock_data.user_info);
      res.json(response.data);
    }
    else res.send("Sorry! no id matched!");

  }
  catch (error) {
    console.error(error);
    res.send("Sorry! an Error occured, please try again.");
  }
});

/*
endpoint for creating a new user
*/
router.post('/', async function (req, res) {

  try {
    let response = await users_func.create_user(mock_data.user_info);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.send("Sorry! an error occured");
  }
});

// export the model
module.exports = router;