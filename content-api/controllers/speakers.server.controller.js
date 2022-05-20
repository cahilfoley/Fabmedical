const Speaker = require("../models/speakers.model");

exports.list = function (query, callback) {
  console.log("==== Load Speakers ====", JSON.stringify(query));
  Speaker.find(query)
    .lean()
    .exec(function (err, speakersList) {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        console.log("Speakers list", JSON.stringify(speakersList));
        callback(null, speakersList);
      }
    });
};
