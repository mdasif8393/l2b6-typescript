// spread
const friends = ["rahim", "karim"];
const schoolFriends = ["pintu", "chintu", "bulbul"];
const collegeFriends = ["Mr. Smart", "Mr. Smart 1"];

friends.push(...schoolFriends, ...collegeFriends);

const user = {
  name: "Mezba",
  phoneNo: "01700000",
};

const otherInfo = {
  hobby: "outing",
  favouriteColor: "Black",
};

const userInfo = {
  ...user,
  ...otherInfo,
};

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send invitation to ${friend}`);
  });
};

sendInvite("pintu", "shintu", "gintu");
