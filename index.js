var time = require('time');

exports.injectable = {
  getDate: () => {
    return new time.Date()
  }
}
exports.handler = (event, context, callback) => {
  var currentTime = exports.injectable.getDate()
  currentTime.setTimezone("America/Los_Angeles");
  console.log(currentTime.toString())
  callback(null, {
    statusCode: '200',
    body: 'The time in Los Angeles is: ' + currentTime.toString(),
  });
};
