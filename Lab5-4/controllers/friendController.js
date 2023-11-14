const friends = require("../models/friends");

const allFriends = (req, res) => {
  res.status(200).json(friends);
};

const filterFriends = (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }
  //(1)
  if (filterLetter) {
    matchingFriends = matchingFriends.filter(
      (friend) =>
        friend.name.charAt(0).toLowerCase() == filterLetter.toLowerCase()
    );
  }
  if (matchingFriends.length > 0) {
    // return valid data when the gender matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res.status(404).json({
      error: `No friends matching with ${filterGender} or starting letter with ${filterLetter}`,
    });
  }
};

const filterInfo = (req, res) => {
  console.log(req.headers);
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers["accept"],
  });
};

const findFriendById = (req, res) => {
  console.log(req.params);
  let friendId = req.params.id;

  let friend = friends.find((friend) => friend.id == friendId);

  friend
    ? res.status(200).json({
        result: `Finding friend with ID ${friendId}`,
        foundFriend: friend,
      })
    : res.status(404).json({ result: `Friend ${friendId} not found` });
};

const addFriend = (req, res) => {
  let newFriend = req.body;
  console.log(newFriend);

  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    //return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  let theFriend = friends.find((friend) => friend.id == friendId);

  if (theFriend) {
    let theFriendIndex = friends.indexOf(theFriend);
    updatedFriend = { ...theFriend, updatedFriend };
    friends[theFriendIndex] = updatedFriend;
    res.status(200).json({
      result: "Updated friend with ID " + friendId,
      data: updatedFriend,
    });
  } else {
    res.status(404).json({ result: `No friend with ID ${friendId}` });
  }
};

module.exports = {
  filterFriends,
  filterInfo,
  findFriendById,
  addFriend,
  updateFriend,
  allFriends,
};
