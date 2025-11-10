// nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log(`From DB: All User`);
  }
};

getUser(null);

// unknown

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    console.log(input * 0.1);
  } else if (typeof input === "string") {
    const [discountPrice] = input.split(" ");
    console.log(Number(discountPrice) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};

discountCalculator(100);
discountCalculator("100 Taka");
discountCalculator(null);

// never

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("mushkil se error hogaya");
