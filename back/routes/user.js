const router = require("express").Router();
const User = require("../models/User");

router.post("/novo", async (req, res) => {
  try {
    const newUser = new User({
      usuario: req.body.usuario,
      senha: req.body.senha,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
