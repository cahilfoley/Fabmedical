const Session = require("../models/session.model");

exports.list = function (query, callback) {
  console.log("==== Load Sessions ====", JSON.stringify(query));
  Session.find(query)
    .lean()
    .exec(function (err, sessionsList) {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        console.log("Speakers list", JSON.stringify(speakersList));
        callback(null, sessionsList);
      }
    });
};
