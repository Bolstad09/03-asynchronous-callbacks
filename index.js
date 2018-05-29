'use strict';

const fileReader = require('./lib/reader.js');

let file = `${__dirname}/data/file.txt`;

let callBack = (err,data) => {
  if(err) { throw err; }
  console.log(data);
};

fileReader(file, callBack );