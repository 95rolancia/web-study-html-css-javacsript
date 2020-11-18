// async & await
// clear style of using promise :)

// 1. async
/*
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve("ellie");
  });
}
*/
async function fetchUser() {
  // do network request in 10 secs...actions
  return "ellie";
}

const user = fetchUser();
user.then(console.log);

// 2.await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// callback hell
function pickFruits1() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

async function pickFruits2() {
  /*
  const apple = await getApple();
  const banana = await getBanana();
  */
  // 병렬 처리
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits2().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
