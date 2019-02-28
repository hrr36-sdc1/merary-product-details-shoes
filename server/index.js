const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const { db , Shoes, Looks, Shares } = require('../database');

app.use(express.static(__dirname + '/../public'));
app.use(cors({
  'origin': '*',
}));

let randomId = () => {
  return Math.floor(Math.random() * (101));
}

let randomImg = () => {
  var arr = [];
  for (var i = 0; i < 18; i++) {
    arr.push(Math.floor(Math.random() * (101)))
  }
  return arr;
}

db.authenticate()
  .then(() => {
    console.log('Connection successful!');
  })
  .catch(err => {
    console.error('Connection failed: ', err);
  })

app.get('/shoes', (req,res) => {
  let arr = randomImg()
  Shoes.sync()
    .then(() => {
      return Shoes.findAll({where : {id : [arr]}});
    })
    .then(shoes => {
      console.log(shoes);
      res.json(shoes);
    })
    .catch(err => {
      console.log(err);
    })
})

app.get('/shoes/:shoeId', (req,res) => {
  let id = Number(req.params.shoeId);
  Shoes.sync()
  .then(() => {
    return Shoes.findOne({where: {id: id}});
  })
  .then(shoe => {
    res.json(shoe);
  })
  .catch(err => {
    console.log('ERROR: ', err);
  })
})

//patch one shoe by ID and increase review count by one
// app.patch('/shoes/:shoeID', (req, res) => {
//   Shoes.findOneAndUpdate({id: res.id}, { $inc: {review_count:1}}, function(err, response) {
//     if (err) {
//       console.log('Error in server patch')
//     } else {
//       console.log('Review count updated')
//     }
//   });
// });

//this is Bill's data
app.get('/looks/:id', (req,res) => {
  let id = Number(req.params.id);
  Looks.sync()
  .then(() => {
    return Looks.findOne({where: {id: id}});
  })
  .then(look => {
    res.json(look);
  })
  .catch(err => {
    console.log('error', err);
  })
})

app.get('/shares/:id', (req,res) => {
  let id = Number(req.params.id);
  Shares.sync()
  .then(() => {
    return Shares.findOne({where: {id: id}});
  })
  .then(share => {
    res.json(share);
  })
  .catch( err => {
    console.log('err', err)
  })
})

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;
