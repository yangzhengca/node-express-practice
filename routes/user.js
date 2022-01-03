const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("new user");
});

router.post("/", (req, res) => {
  res.send("create new user");
});

router.get("/:id", (req, res) => {
  res.send(`user get with id: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`update user with id: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete user with id: ${req.params.id}`);
});


// router
//   .route("/:id")
//   .get((req, res) => {
//     res.send(`user get with id: ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`update user with id: ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`delete user with id: ${req.params.id}`);
//   });

module.exports = router;
