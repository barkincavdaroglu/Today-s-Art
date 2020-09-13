// server.js
const express = require("express");
const fetch = require('node-fetch');
var schedule = require('node-schedule');


const app = express();

const objectIds = {objectIds: [1, 438814,438815,436535,436106,634108,436504,458998,11234,459136,435908,679844,435802,435728,438605,11207,11605,436792,437329,437790,437826,437891,435641,440723,436323,436892,436101,471904,435739,436253,439933,327830,459072,436658,437654,436573,441769,435882,435868,435817,435826,435888,435896,438821,438754,437532,437153,437344,436944,437455,436851,436244,437490,437423,459055,436545,435844,437658,436440,437971,436516,438822,45428,435853,459092,438112,470600,437549,437430,436037,471061,437056,459045,458994,458978,438816,437261,435839,40055,437749,437447,437900,435851,437926,435702,459028,459027,437299,459046,458961,458956,458977,459007,437769,438417,39918,437835,435621,458971,436095,436002,436918,438817,435984,438818,437397,436964,459016,459131,437881,437053,435962,435809,436839,436532,437675,436579,436838,470306,435600,437854,437372,436282,436966,437326,437487,436896,437175,459106,436121,436622,435876,437609,436528,437283,470304,437394,437869,436819,437097,436840,438820,437879,436603,436575,459038,459037,470309,436947,436105]};

var j = schedule.scheduleJob('*/60 * * * *', function(){
  objectIds.objectIds[0]++;
});

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the array of objectIds to the webpage
app.get("/objectIds", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(objectIds);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
