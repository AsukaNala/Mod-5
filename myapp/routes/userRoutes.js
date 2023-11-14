const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Anthony Albanese", country: "AU" },
  { id: 2, name: "Joe Biden", country: "US" },
  { id: 3, name: "Chris Hipkins", country: "NZ" },
  { id: 4, name: "Lee Hsien Loong", country: "SG" },
];

//req.headers is an object =information about the request, including
// session data, cookies, the type of agent
// sending the request, any particular caching
// protocol, and potentially also things like
// authentication tokens.
router.get("/headers", (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
}); //

//Dynamic request param endpoint - get the user matching the specific ID ie. /users/3

router.get("/:id", (req, res) => {
  console.log(req.params);

  let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path.so "/headers"

  let user = users.find((user) => user.id == userId);

  user
    ? res.status(200).json({ result: user })
    : res.status(404).json({ result: "User ${userId} not found" });
});

// router.get("/headers", (req, res) => {
//   console.log(req.headers);
//   res.json(req.headers);
// });
// 'id' will be a value matching anything after the / in the request path.so "/headers" is treated as a param here

//a POST request with data sent in the body of the request,representing a new user
router.post("/", (req, res) => {
  let newUser = req.body;
  console.log(newUser);

  if (!newUser.name || !newUser.country) {
    res.status(500).json({ error: "User must contain a name and country" }); //500 is server error
    return;
  } else if (!newUser.id) {
    newUser.id = users.length + 1;
  }
  users.push(newUser);
  res.status(200).json(newUser);
});

module.exports = router;
