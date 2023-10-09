// #1
// Random Resolve
const randomResolve = () => {
  let randomNumber = Math.floor(Math.random() * (5 - 1)) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomNumber % 2 === 0
        ? resolve(`${randomNumber} is even number`)
        : reject(`${randomNumber} is odd number`);
    }, randomNumber * 1000);
  });
};
randomResolve()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// #2
// Promise API
const createPromiseArr = (n) => {
  const promises = Array.from({ length: n }, () => randomResolve());
  return Promise.all(promises)
    .then((result) => {
      console.log(`🥳 Yasss`);
    })
    .catch((error) => {
      console.error(`🫠🫡 ok`);
    });
};
createPromiseArr(6);

// #3
// Async/Await
const printResponse = async (n) => {
  const promises = Array.from({ length: n }, () => randomResolve());

  try {
    await Promise.all(promises);
    console.log(`🥳 Yasss`);
  } catch (error) {
    console.error(`🫠🫡 ok`);
  }
};
printResponse(5);

// #4
// Casino
const randomTimeCasino = () => {
  let randomTime = Math.floor(Math.random() * (6 - 1)) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumberCasino = Math.floor(Math.random() * 101);
      let randomColor = Math.floor(Math.random() * 2);
      randomColor = randomColor === 0 ? "black" : "red";
      if (randomNumberCasino === 0) {
        randomColor = "green";
      }  
      const randomEvenOdd =
        randomNumberCasino !== 0 && randomNumberCasino % 2 === 0
          ? "even"
          : "odd";
      resolve({
        number: randomNumberCasino,
        color: randomColor,
        evenOdd: randomEvenOdd,
      });
    }, randomTime * 1000);
  });
};
const casino = async (number, color, evenOdd) => {
  try {
    const result = await randomTimeCasino();
    console.log(`Your bet:  ${number}, ${color}, ${evenOdd}`);
    console.log(
      `Casino result: ${result.number}, ${result.color}, ${result.evenOdd}`
    );

    if (
      number === result.number &&
      color === result.color &&
      evenOdd === result.evenOdd
    ) {
      console.log(`💵 💵 💵`);
    } else if (
      (number === result.number && color === result.color) ||
      (color === result.color && evenOdd === result.evenOdd) ||
      (number === result.number && evenOdd === result.evenOdd)
    ) {
      console.log(` 💵 💵`);
    } else if (
      number === result.number ||
      color === result.color ||
      evenOdd === result.evenOdd
    ) {
      console.log(` 💵 `);
    } else throw new Error();
  } catch (error) {
    console.log("🫣");
  }
};
casino(10, `red`, `even`);
casino(57, `black`, `odd`);
casino(96, `black`, `odd`);
casino(5, `red`, `even`);
