const faker = require('faker');
const nameOptions = require('./Options.js');
const short_descOptions = require('./Options.js');
const typeOptions = require('./Options.js');

const generateShoe = (id) => {
  const newShoe = {};
  newShoe.id = id;
  newShoe.name = nameOptions[Math.floor(Math.random() * nameOptions.length)];
  newShoe.img_url = 'https://loremflickr.com/295/295/shoes?random=' + id;
  newShoe.short_desc = short_descOptions[Math.floor(Math.random() * short_descOptions.length)];
  newShoe.long_desc = faker.lorem.paragraph();
  newShoe.type = typeOptions[Math.floor(Math.random() * typeOptions.length)];
  newShoe.price = Math.floor(Math.random() * 300) + 15;
  newShoe.review_count = Math.floor(Math.random() * 400) + 25;
  newShoe.rating = Math.floor(Math.random() * 5) + 1;
  newShoe.details = faker.lorem.paragraph();
  return newShoe;
}

const generateShoes = (n) => {
  let shoes = [];
  for (let i = 1; i <= n; i++) {
    let newShoe = generateShoe(i);
    shoes.push(newShoe);
  }
  return shoes;
}

module.exports.generateShoes = generateShoes;