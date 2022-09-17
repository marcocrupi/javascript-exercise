const stringOne = "incerta";
const stringTwo = "trincea";

const anagramDetect = (stringOne, stringTwo) => {
  arrayOne = [];
  arrayTwo = [];
  for (i in stringOne) {
    arrayOne.push(stringOne[i]);
  }
  for (i in stringTwo) {
    arrayTwo.push(stringTwo[i]);
  }
  console.log(arrayOne);
  console.log(arrayTwo);

  if (arrayOne.sort().join(",") === arrayTwo.sort().join(",")) {
    console.log("Le due parole sono anagrammi");
  } else {
    console.log("Le due parole non sono anagrammi");
  }
};

anagramDetect(stringOne, stringTwo);
