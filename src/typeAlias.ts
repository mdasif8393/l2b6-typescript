type TUser = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: TUser = {
  id: 1,
  name: {
    firstName: "Mezba",
    lastName: "Abedin",
  },
  gender: "male",
  contactNo: "0177777",
  address: {
    division: "Chittagong",
    city: "Chittagong",
  },
};

const user2: TUser = {
  id: 2,
  name: {
    firstName: "X",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "0177777w",
  address: {
    division: "Khulna",
    city: "Khulna",
  },
};
