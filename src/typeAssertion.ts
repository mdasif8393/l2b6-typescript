let anything: any;

anything = 123;
console.log((anything as Number).toFixed(2));

anything = "Asif";
console.log((anything as string).length);

/////////////

const kgToGram = (input: string | number): string | number | undefined => {
  if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is" ${Number(value) * 1000}`;
  } else if (typeof input == "number") {
    return input * 1000;
  }
};

const result1 = kgToGram(2) as Number;
const result2 = kgToGram("2 kb") as Number;

//////////////////

type CustomType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomType).message);
}
