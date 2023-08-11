const s = "rat",
  t = "car";

const set1 = new Set(s);
const set2 = new Set(t);

console.log("size", set1.size, set2.size);

if (set1.size !== set2.size) {
  console.log("out", set1.size, set2.size);
}

const obj = {};

const addSymbol = (obj, str) => {
  str.split("").map((el) => (obj[el] ? obj[el]++ : (obj[el] = 1)));
};

const deleteSymbol = (obj, str) => {
  str.split("").map((el) => {
    if (obj[el]) {
      if (obj[el] === 1) {
        delete obj[el];
      } else {
        obj[el]--;
      }
    }
  });
};

console.log(addSymbol(obj, s), obj);
console.log(deleteSymbol(obj, t), obj);
