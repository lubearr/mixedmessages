// Generate random number
function generateRandomNumber(len) {
  return (Math.floor(Math.random() * len));
}

// Create lists of options
const data = {
  genres: [
    'Romantic Comedy',
    'Action Adventure',
    'Slice of Life',
    'Murder Mystery',
    'Political Thriller',
  ],
  settings: [
    'the Wild West',
    'Space',
    'Medieval England',
    'Ancient China',
    'Alabama',
    'an isolated Alaskan town',
  ],
  themes: [
    'coming of age',
    'circle of life',
    'technology in society',
    'pursuit of love',
    'sacrifice for love',
  ],
};

// Generate and store randomized data
let randData = [];
for (let content in data) {
  randData.push(data[content][generateRandomNumber(data[content].length)]);
}

console.log(randData);


const genGenre = randData[0];
const genSetting = randData[1];
const genTheme = randData[2];

// Log story prompt
