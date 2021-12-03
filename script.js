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
    'Middle Earth',
    'Soviet Russia',
  ],
  themes: [
    'coming of age',
    'the circle of life',
    'technology in society',
    'the pursuit of love',
    'sacrifice for love',
    'revenge',
    'courage and perserverance',
    'the innocence of youth',
    'the corruption of power',
  ],
};

// Generate and store randomized data
let randData = [];
for (let content in data) {
  randData.push(data[content][generateRandomNumber(data[content].length)]);
}

const genGenre = randData[0];
const genSetting = randData[1];
const genTheme = randData[2];

// Log story prompt
console.log(`Story Prompt: A ${genGenre} set in ${genSetting} about ${genTheme}.`)
