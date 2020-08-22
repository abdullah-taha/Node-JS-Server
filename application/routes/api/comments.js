const express = require('express');
const router = express.Router();
const comments_func = require('../../services/comments_services');
const mock_data = require('../../data/mock_data');

router.get('/byUser/:id', async function(req, res)
{
  try {
    posts = await comments_func.get_comments_by_UserID(req.params.id);
    res.send(posts);
    
  } catch (error) {
    console.error(error);
    res.send("Sorry! an Error occured");
  }
});

router.get('/byPost/:id', async function(req, res)
{
  try {
    posts = await comments_func.get_comments_by_postID(req.params.id);
    res.send(posts);
    
  } catch (error) {
    console.error(error);
    res.send("Sorry! an Error occured");
  }
});


module.exports =  router;