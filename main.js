//javaing on my script

function $(id){
    return document.getElementById(id)
}


var randomText = $("random")

var randomTitleArray = [
    "I will confiscate your opinion do not test me",
    "Dictator Removal Specialist",
    "Tactical Breach Hamster",
    "He loves his mom",
    "Professional Boat Rocker",
    "Expert Procrastinator",
    "Not a crypto bro",
    "very cool",
    "respectfully yours!",
    "Rocket Launcher Enthuasiast",
    "Script Kiddy!",
    "The very model of a modern major general!"
]

var random = getRandomIntInclusive(0, randomTitleArray.length-1)
console.log(randomTitleArray[random])

randomText.textContent = randomTitleArray[random]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}