const { getTrimLowerString } = require("./utils/getTrimLowerString");

let users = [];

const findUser = (user) => {
  const name = getTrimLowerString(user.name);
  const room = getTrimLowerString(user.room);

  return users.find(
    (user) =>
      getTrimLowerString(user.name) === name &&
      getTrimLowerString(user.room) === room
  );
};

const addUser = (user) => {
  const isExist = findUser(user);
  !isExist && users.push(user);

  const currentUser = isExist || user;

  return { isExist: !isExist, user: currentUser };
};

const getRoomUsers = (room) => users.filter((user) => user.room === room);

const removeUser = (user) => {
  const currentUser = findUser(user);
  if (currentUser) {
    users = users.filter(
      ({ name, room }) => room === currentUser.room && name === currentUser.name
    );
  }
  return currentUser;
};

module.exports = { addUser, findUser, getRoomUsers, removeUser };
