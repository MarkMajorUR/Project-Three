const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/empowerDB"
);

const userSeed = [
  {
    user: "bobby",
    password: 'password1234',
  },
  {
    user: "John",
    password: 'password5678',
  }
];

const goalSeed = [
  {
    user_id: "0000",
    title: "Cut down to 1 cigarette a day",
    startdate: '2021-01-16',
    targetdate: '2021-04-10', 
    date: new Date(Date.now())
  },
  {
    user_id: "0000",
    title: "No drinks",
    startdate: '2021-01-16',
    targetdate: '2021-04-10', 
    date: new Date(Date.now())
  },
  {
    user_id: "1111",
    title: "Switch non-alcoholic beer",
    startdate: '2021-01-16',
    targetdate: '2021-04-10', 
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(`\n  ${data.result.n} User records inserted!\n`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Goal
  .remove({})
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(`${data.result.n} Goal records inserted!\n`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
