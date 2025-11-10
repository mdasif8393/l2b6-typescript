//? ternary operator

const userAge = 21;
const result = userAge >= 21 ? "You are eligible" : "Tou are not";
console.log(result);

//?? nullish coaleascing operator

const userTheme = undefined;
const selectedTheme = userTheme ?? "light";
console.log(selectedTheme);

//?. optional chaining
type User = {
  name: string;
  address: {
    city: string;
    road: string;
    presentaddress: string;
    permanentAddress?: string;
  };
};

const user: User = {
  name: "Persian",
  address: {
    city: "ctg",
    road: "Awesome Road",
    presentaddress: "ctg town",
  },
};

const permanentAddress =
  user?.address?.permanentAddress ?? "No Permanent address";
