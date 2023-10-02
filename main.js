// =========================================
// `Timeout`;

const printNumber = (from, to) => {
  for (let i = from; i <= to; i++) {
    setTimeout(() => {
      console.log(i + `\n` + `after 1s delay`);
    }, 1000 * i);
  }

  i = from;
  const startInterval = () => {
    const intervalId = setInterval(() => {
      console.log(i + `\n` + `after 1s interval`);
      i++;
      if (i > to) {
        clearInterval(intervalId);
      }
    }, 1000);
    console.log(``); //job separation in the console
  };
  setTimeout(startInterval, 5000);
};

printNumber(1, 5);

// =========================================
// `Delayed loop`;

const delayedLoop = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i + `\n` + `loop after 1s delay`);
    }, 1000 * i);
  }
  console.log(``); //job separation in the console
};

setTimeout(delayedLoop, 10300);

// =========================================
//  `Random`;
const startRandom = () => {
  const randomPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random().toFixed(1);
    resolve(randomNumber);
  });
  randomPromise
    .then((randomNumber) => {
      if (randomNumber >= 0.5) {
        console.log(`Random number ${randomNumber}`);
        return randomNumber;
      } else {
        throw new Error(`Random number < 0.5`);
      }
    })
    .catch((error) => console.log(`Error! ${error.message}`));
  console.log(``); //job separation in the console
};
setTimeout(startRandom, 16000);

// =========================================
//  `Server`;

const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];
const startServer = () => {
  const getUserData = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((user) => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(new Error("404 not found"));
        }
      }, 1000);
    });
  };

  getUserData(2)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  console.log(``); //job separation in the console
};
setTimeout(startServer, 17000);
