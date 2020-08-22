const express = require('express');
const router = express.Router();
const axios = require('axios');
const users_func = require('../../services/users_services');
const posts_func = require('../../services/posts_services');
const mock_data = require('../../data/mock_data');


// endpoint for getting all posts with comments
router.get('/', async function (req, res) {
  try {
    posts = await posts_func.get_posts();
    res.send(posts);

  } catch (error) {
    console.error(error);
    res.send("Sorry! an Error occured");
  }
});


/* 
endpoint for creating a new post
it first checks if user exists:
  if it does, it create a post 
  if it doesn't, it first creates a user and then create the post

the mock data for the post and the user are in data/mock_data.js  
*/
router.post('/', async function (req, res) {
  try {
    const found = await users_func.check_user(mock_data.params.userId);
    if (found != false) {
      let rsponse = await posts_func.create_post(mock_data.params);
      res.json(rsponse.data);
    }
    else {
      console.log("creating user...");
      let response = await users_func.create_user();
      let response2 = await posts_func.create_post(params);
      res.json(response2.data);
    }

  } catch (error) {
    console.log(error);
    res.send("Sorry! an error occured");
  }
});

// export the model
module.exports = router;