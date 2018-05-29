// 'use strict';

// const fs = require('fs');

// module.exports = exports = (paths, callback) => {
//   let newArr = [];
  
//   for (let i = 0; i < paths.length; i++) {
//     setTimeout(
//       fs.readFile(paths[i], (err, data) => {
//         if (err) {
//           callback(err);
//         }
//         else {
//           newArr[i] = data.toString().trim();
//         }
       
//       }), 500);
//   }
//   if(newArr.length === paths.length){
//   callback(undefined, newArr);
// }
// };

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