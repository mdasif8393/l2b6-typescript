// Type Alias
type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "X",
  age: 100,
  role: "admin",
};

const user2: User = {
  name: "Y",
  age: 300,
};

// Interface
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

// function
interface IAddFunction {
  (num1: number, num2: number): number;
}

const add: IAddFunction = (num1, num2) => num1 + num2;

// Array

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["as", "sda"];
