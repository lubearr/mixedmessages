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

// Determine if genGenre starts with vowel and sets proper indefinite article
let article = "";
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
if (vowels.includes(genGenre[0].toLowerCase())) {
  article = "An";
} else {
  article = "A";
}

// Log story prompt
console.log(`Story Prompt: ${article} ${genGenre} set in ${genSetting} about ${genTheme}.`)
