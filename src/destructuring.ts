const user = {
  id: 123,
  name: {
    firstName: "John",
    middleName: "Wick",
    lastName: "Persian",
  },
  gender: "male",
  favouriteColor: "Black",
};

const {
  favouriteColor: myColor,
  name: { middleName: myName },
} = user;

const myFriends = ["as", "as2", "as3", "as4", "as5"];

const [, , bestFriend, ...rest] = myFriends;

console.log(bestFriend);
console.log(rest);
