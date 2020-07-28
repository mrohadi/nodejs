const request = require("request");

request("http://www.googledfdfdf.com", (err, res, body) => {
  if (!err && res.statusCode === 200) {
    console.log(body);
  } else {
    console.log(err);
  }
});
