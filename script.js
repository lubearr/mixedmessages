// Generate random number
function generateRandomNumber(len) {
  return (Math.floor(Math.random() * len));
}

// Create lists of options
const data = {
  genres: [1, 2, 3],
  settings: [4, 5, 6],
  themes: [7, 8, 9],
};

// Generate and store randomized data
let randData = [];
for (let content in data) {
  randData.push(data[content][generateRandomNumber(data[content].length)]);
}

console.log(randData);

// Log story prompt
