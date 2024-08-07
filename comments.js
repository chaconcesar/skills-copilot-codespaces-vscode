// Create web server
// Create a web server that responds to requests to the path /comments with a JSON response. The JSON response should be an array of comment objects. Each comment object should have an id property and a comment property.

// The id property should be a unique identifier for the comment (a number that increments for each comment).
// The comment property should be a string that contains the text of the comment.
// You can hard-code the comments for now (create an array of comment objects in your program), but in the next step you will create a form that allows users to add comments.

// Here is an example of what the JSON response should look like:

// [
//   {
//     "id": 1,
//     "comment": "This is a comment."
//   },
//   {
//     "id": 2,
//     "comment": "This is another comment."
//   }
// ]
// You can use the express library to create the web server. Here is an example of how you might create the web server:

// var express = require('express');
// var app = express();

// app.get('/comments', function(req, res) {
//   // respond with JSON
//   res.json([
//     {
//       "id": 1,
//       "comment": "This is a comment."
//     },
//     {
//       "id": 2,
//       "comment": "This is another comment."
//     }
//   ]);
// });

// app.listen(3000);
// You can run this program with node comments.js and then visit http://localhost:3000/comments in your web browser to see the JSON response.

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
  // respond with JSON
  res.json([
    {
      "id": 1,
      "comment": "This is a comment."
    },
    {
      "id": 2,
      "comment": "This is another comment."
    }
  ]);
});

app.listen(3000);