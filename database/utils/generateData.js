const fs = require('fs');
const generateShoes = require('./generateShoes.js');

const thousandShoes = generateShoes.generateShoes(1000);
const strThousandShoes = JSON.stringify(thousandShoes);

let writer = fs.createWriteStream('./database/utils/data.txt');

function writeOneMillionShoes(writer, data, encoding) {
  let i = 10000;
  write();
  function write() {
    let ok = true; //flag
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, encoding);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
};

writeOneMillionShoes(writer, strThousandShoes, 'utf8');





