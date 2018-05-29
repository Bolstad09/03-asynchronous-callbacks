'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {
  for(let i = 0; i < paths.length; i++){
    setTimeout(
      fs.readFile(paths, (err, data) => {
        if(err){
          callback(err);
        }
        else {
          callback(undefined, data.toString().trim());
        }
      }),500);
  }
};