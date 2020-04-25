const express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  let { username, password } = req.body;

  let errOccured = false;
  let err_message = "";
  try {
    req.session.username = username;
    req.session.password = password;
  } catch (err) {
    errOccured = true;
    err_message = err;
  } finally {
    if (errOccured) {
      res.send("Error occured while setting session: " + err_message);
    }
    console.log(req.session);
    res.send(`Session set successfully`);
  }
});

router.get("/logout", (req, res, next) => {
  let errorOccured = false;
  let err_message = "";
  try {
    console.log(`Before destroying session: ${req.session}`);
    req.session.destroy((err) => {
      if (err) {
        console.log(`Could not destroy session`);
      } else {
        console.log(`After destroying session: ${JSON.parse(req)}`);
      }
    });
  } catch (error) {
    errorOccured = true;
    err_message = error;
  } finally {
    if (errorOccured) {
      res.send("Error in destroying session: " + err_message);
    }
    console.log(req.session);
    res.send(`Session destroyed successfully`);
  }
});

module.exports = router;
