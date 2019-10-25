// Require Request Module
const request = require("request");
// Require File System module
// const fs = require("fs");
// Create variable to pass the given URL
const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breed = process.argv[2];
request(url + breed, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  } else if (body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(data[0].description);
    }
  }
});
