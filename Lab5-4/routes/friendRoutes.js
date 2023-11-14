const express = require("express");
const router = express.Router();
const friends = require("../models/friends");
const friendController = require("../controllers/friendController");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

// default endpoint, gets all friends
router.get("/", (req, res) => {
  //res.json(friends);
  friendController.allFriends(req, res);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  // console.log(req.query);
  // let filterGender = req.query.gender;
  // let filterLetter = req.query.letter;
  // let matchingFriends = [...friends];

  // if (filterGender) {
  //   matchingFriends = matchingFriends.filter(
  //     (friend) => friend.gender == filterGender
  //   );
  // }
  // //(1)
  // if (filterLetter) {
  //   matchingFriends = matchingFriends.filter(
  //     (friend) =>
  //       friend.name.charAt(0).toLowerCase() == filterLetter.toLowerCase()
  //   );
  // }
  // if (matchingFriends.length > 0) {
  //   // return valid data when the gender matches
  //   res.status(200).json(matchingFriends);
  // } else {
  //   // and an error response when there are no matches
  //   res.status(404).json({
  //     error: `No friends matching with ${filterGender} or starting letter with ${filterLetter}`,
  //   });
  // }

  friendController.filterFriends(req, res);
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  //console.log(req.headers);

  // Modify this response to just return info on the user-agent, content-type and accept headers
  // res.json({
  //   "user-agent": req.headers["user-agent"],
  //   "content-type": req.headers["content-type"],
  //   "accept": req.headers["accept"],
  // });
  friendController.filterInfo(req, res);
}); // because of "-", need to be rounded by "" and [].usually can access with .

// 3. Create new friend using POST method

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  // console.log(req.params);
  // let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // // Modify this function to find and return the friend matching the given ID, or a 404 if not found

  // let friend = friends.find((friend) => friend.id == friendId);

  // friend
  //   ? res.status(200).json({
  //       result: `Finding friend with ID ${friendId}` + JSON.stringify(friend),
  //     })
  //   : res.status(404).json({ result: `Friend ${friendId} not found` });

  friendController.findFriendById(req, res);

  // Modify this response with the matched friend, or a 404 if not found
  //res.json({ result: "Finding friend with ID " + friendId });
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  // let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  // console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // // we can add some validation here to make sure the new friend object matches the right pattern
  // if (!newFriend.name || !newFriend.gender) {
  //   res
  //     .status(500)
  //     .json({ error: "Friend object must contain a name and gender" });
  //   return;
  // } else if (!newFriend.id) {
  //   newFriend.id = friends.length + 1; // generate an ID if one is not present
  // }

  // // if the new friend is valid, add them to the list and return the successfully added object
  // friends.push(newFriend);
  // res.status(200).json(newFriend);

  friendController.addFriend(req, res);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  // let friendId = req.params.id;
  // let updatedFriend = req.body;

  // // Replace the old friend data for friendId with the new data from updatedFriend

  // let theFriend = friends.find((friend) => friend.id == friendId); //find the friend matching with friendId

  // if (theFriend) {
  //   //if the friend exist,
  //   let theFriendIndex = friends.indexOf(theFriend); // find the friend with index
  //   updatedFriend = { ...theFriend, ...updatedFriend }; // merge the new data and old data. Latest object overrides the same properties of the old data.
  //   friends[theFriendIndex] = updatedFriend; //old object => new object in the Friends Array
  //   // Modify this response with the updated friend, or a 404 if not found
  //   res.status(200).json({
  //     result: "Updated friend with ID " + friendId,
  //     data: updatedFriend,
  //   });
  // } else {
  //   res.status(404).json({ result: `No friend with ID ${friendId}` });
  // }
  friendController.updateFriend(req, res);
});

module.exports = router;
