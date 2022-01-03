const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
    // get data from query string like "?name=ethan"
    // console.log(req.query.name)
  res.send("new user");
});

router.post("/", (req, res) => {
//    console.log(req.body.name) 
  res.send("create new user");
});

// router.get("/:id", (req, res) => {
//   res.send(`user get with id: ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`update user with id: ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`delete user with id: ${req.params.id}`);
// });


router
  .route("/:id")
  .get((req, res) => {
    res.send(`user get with id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id: ${req.params.id}`);
  });

// when ever a route with param of id
router.param('id', (req, res, next, id) => {
    console.log(id);
    next(); 
})

module.exports = router;
