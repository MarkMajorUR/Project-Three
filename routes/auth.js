// const router = require("express").Router();
// router.post("/register", (req, res) => {
//   res.send("Register");
// });
// module.exports = router;

const router = require("express").Router();
const User = require("../models/user");
router.post("/register", async (req, res) => {
    console.log(req.body)
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser });
  } catch (error) {
    res.status(400).json({ error });
  }
});
module.exports = router;