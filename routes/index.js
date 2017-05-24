var express = require('express');
var router = express.Router();
require('dotenv').config()
var OAuth = require('oauth')

var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.Consumer_Key,
      process.env.Consumer_Secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    )
/* GET home page. */
router.get('/', function(req, res, next) {
  oauth.get(
       'https://api.twitter.com/1.1/search/tweets.json?q=%40storyoverflow',
       process.env.Access_token, //test user token 
       process.env.Access_token_secret, //test user secret             
       function (e, data){
         if (e) console.error(e);        
         res.send(data)  
       })    
     })



module.exports = router;
