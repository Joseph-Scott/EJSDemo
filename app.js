var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susie"},
    {title: "My adorable pet bunny", author: "Charlie"},
    {title: "Post 1", author: "Colt"},
  ];

  res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function(){
  console.log("Server is listening!");
});