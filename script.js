//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "We're just disconnecting",
  "You don't turn me on",
  "It's not you, it's your device",
  "It's like you don't have any memory",
  "It's a matter of storage",
  "You're moving out of range",
  "There's another device",
  "We're running out of power",
  "We shouldn't data anymore",
];

const buttonRetry = document.getElementById("button-network");

// Function to handle the button click and update the text
function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}

//end of network error function

//function dropdown menu (do not edit this first part)
function addText(content) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = content;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "Gavlebocken") {
    addText("Every year in the town of Gavle, Sweden, the town officials construct a giant straw goat. It's massive, usually 13 metres tall, and is standing for all to see from early December.The only problem is that every year, the people of Gavle make it their mission to destroy it.");
  } else if (x === "PercyJackson") {
    addText("I first read the Percy Jackson and the Olympians series when I was a preteen. And since it became a TV show, I have been thriving. The second season was beyond outstanding. The actors have really brought the characters to life, and I am buzzing as I wait for season 3");
  } else if (x === "Wombats") {
    addText("'Fuck our options and fuck the life plan, no more worry, I've killed it with both hands' - The Wombats 'Method to the Madness'");
  } else if (x === "Lightspeed") {
    addText("Light travels. Isn't that a crazy concept? I am constantly caught in the thought that on a cosmic level, what we're seeing is based on information that is years old. Even our sun, if it disappeared, the light of it and the gravity it holds us in would take 8 minutes to disappear.");
  } else if (x === "CO33") {
    addText("Clair Obscur: Expedition 33 was a game that I vibed with so heavily last year. It was exquisite. The combat was engaging without getting too difficult, the art was beautiful, it told an amazing story of grief and the toxic cycles we can find ourselves in, every element of it was perfect.");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "today was a day",
  "but I guess that's life",
  "seasons change with you",
  "hell or high water",
  "moods drown out the noise",
  "lets go get this bread",
  "wish I was taller",
  "taller is not me",
  "coding ain't for me",
  "it's clobbering time",
  "my way or get high",
  "time to go to sleep",
  "how bout we eat lunch",
  "happy birthday kid",
  "nothing personal",
  "go and fuck yourself",
  "way to go my guy"
];
const sevenSyllables = [
  "depths just drown and fall beneath",
  "oceans flow and rivers lap",
  "the quick brown fox jumps over",
  "the lazy dog is there too",
  "I wish i had a big brain",
  "scooby doo was a good dog",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "AFL 2002 draft",
  "Archive Of Our Own",
  "Avatar: The Last Airbender",

  "Blue Prince",
  "Barbarian 5e",
  "Beauty beyond compare",

  "Cleric 5e",
  "Cast of Percy Jackson TV show",
  "Come with me and we'll see",

  "Dropout.tv",
  "Disney+",
  "Don't bother hiding it from you",

  "Ethernet switch",
  "East and West Germany",
  "Every mention makes me smile",

  "Frogs",
  "Fellowship of the Ring",
  "Forget how to forget",

  "Gavlebocken",
  "Grover Underwood",
  "Get me out of my mind",

  "History of the entire world, I guess",
  "Hatsune Miku, what are you doing here?",
  "How are you so perfect",

  "Internet speed test",
  "IKEA",
  "I think about dying sometimes",

  "JB Hi-Fi",
  "Justice League",
  "Just never let me go",

  "Kingdom Come: Deliverance 2",
  "Koutoufides gorilla ad",
  "Keep me in your heart",

  "Lego Batman",
  "Lightspeed in m/s",
  "Leave my body to join your soul",

  "Miasma",
  "Minecraft",
  "More time less problems",

  "Nostalgia",
  "Nosferatu",
  "Nostradamus saw you coming",

  "Officeworks",
  "Outlook",
  "On my mind every hour every day",

  "Percy Jackson",
  "Paladin 5e",
  "Please just let me be",

  "Quantum entanglement",
  "Queen",
  "Quit scrambling my mind",

  "Ranger 5e",
  "Rogue 5e",
  "Remind me of your touch",

  "Superman",
  "Streudel what is",
  "Soft clothes and softer bodies",
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "robots, pilgrims, broken families, displaced animals, right-wing militants, cyborgs".split(
      ","
    ),
  verbs =
    "wander,search, cross, kneel to pray in, avoid, survey, sneak across, hide in".split(
      ","
    ),
  objects =
    "the barren plains,the wilted grasslands, vast wastelands,wildernesses unknown,languishing caravan parks, arid deserts, military bunkers, valleys of ash and bone".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
  setTimeout(processPoem, 1000);
}
// Start the process
processPoem();