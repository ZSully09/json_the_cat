// Require Request Module
const request = require("request");
// Require File System module
// const fs = require("fs");
// Create variable to pass the given URL
const url = process.argv[2];
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log(typeof body);
  // console.log("body:", body); // Print the HTML for the Example homepage.
  // // Write the body of www.example.com/ into our local index.html file; if error, throw error
  // console.log(data);
  // console.log(typeof data);
  console.log("data:", data[0].description);
});
