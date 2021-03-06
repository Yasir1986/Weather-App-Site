const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/76733e9c3ca293ed6de639d3d5bf874f/" +
    latitude +
    "," +
    longitude;
  //const url = 'http://api.weatherstack.com/current?access_key=827c420863804066d6092157e36bf8f8' + latitude + ',' + longitude
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect forecast services!", undefined);
    } else if (body.error) {
      callback("Unable to find the location.", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degrees out. This high today is " +
          body.daily.data[0].temperatureHigh +
          " degrees with a low of " +
          body.daily.data[0].temperatureLow +
          " degrees. There is a " +
          body.currently.precipProbability +
          " % chance of raining! "
      );
    }
  });
};

module.exports = forecast;
