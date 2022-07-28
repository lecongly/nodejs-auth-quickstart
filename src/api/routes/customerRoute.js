const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const customerController = require("../controllers/customerController");
router.post("/register", customerController.register);
router.post("/login", customerController.login);
router.get("/logout", auth, customerController.logout);
router.get("/authUser", auth, customerController.authUser);
router.put("/resetPassword/:token", customerController.resetPassword);
router.put("/forgotPassword", customerController.forgotPassword);
router.put("/changePassword", auth, customerController.changePassword);

module.exports = router;
