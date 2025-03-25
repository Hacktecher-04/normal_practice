const express = require("express");
const { register, login, logout } = require("../controllers/user.controller");
const { authenticateToken } = require("../middleware/user.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "You have access to this protected route!" });
});

module.exports = router;

