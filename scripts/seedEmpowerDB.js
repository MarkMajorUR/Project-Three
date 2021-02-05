const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/empowerDB", { useNewUrlParser: true, useUnifiedTopology: true }
);

const userSeed = [
  {
    name: "bobby smith",
    email: "bobbysmith@gmail.com",
    password: 'password1234',
  },
  {
    name: "John Maning",
    email: "jmaning@yahoo.com",
    password: 'password5678',
  }
];

const goalSeed = [
  {
    user_id: "0000",
    title: "Cut down to 1 cigarette a day",
    startdate: '2021-01-16',
    targetdate: '2021-04-10', 
    reason: "I want to have better exercise sessions.",
    date: new Date(Date.now())
  },
  {
    user_id: "0000",
    title: "No drinks",
    startdate: '2021-01-16',
    targetdate: '2021-04-10', 
    reason: "I need to stop drinking.",
    date: new Date(Date.now())
  },
  {
    user_id: "1111",
    title: "Switch non-alcoholic beer",
    startdate: '2021-01-16',
    targetdate: '2021-04-10', 
    reason: "I want to be present in my family's life.",
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

  
