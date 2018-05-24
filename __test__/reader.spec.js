'use strict';

const reader = require('../lib/reader');

describe('Reader Module', () => {

  it('when given bad file, return error', (done) => {

    let file = `/../../missing.txt`;

    reader(file, (err) => {

      expect(err).toBeDefined();
      
      done();
      
    });
  });

  it('read a single file, returns the contents', (done) => {
    let file = `data/banana.txt`;
    reader(file, (err, data) => {
      
      expect(typeof data).toBe('string');
      
      done();
    });
  });

  it('when given an arry of files, returns contents', (done) => {
  
    let paths =[`data/apple.txt`, `data/banana.txt`];
    let path = '';
    paths.forEach( (ele) => {
      
      path = ele.toString();
      reader(path, (err, data) => {
        console.log(data);
        expect(typeof data).toBe('string');
        done();
      });
    });
      
  });
});
// it('when given a new array, return same contents', (done) => {
  