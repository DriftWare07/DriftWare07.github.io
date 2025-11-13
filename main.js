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
    "The very model of a modern major general!",
    "Never gonna give you up!",
    "Now in 3-D!",
    "The cake is a lie",
    "insert funny quip here"
]

//images are stored like this ["imagepath", "caption"]
var slideShowImages = [
  ["./graphics/20241020192400_1.jpg", "Taken in Garry's Mod"],
  ["graphics/iteration_zero.png", "Experimenting with shader nodes in blender"]
  
]

var random = getRandomIntInclusive(0, randomTitleArray.length-1)
console.log(randomTitleArray[random])

randomText.textContent = randomTitleArray[random]


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // Ensure min is an integer
  max = Math.floor(max); // Ensure max is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var currentSlide = 0;

function changeSlide(n){
  var img = $("slideshow");
  if (currentSlide + n > slideShowImages.length-1)
  {
    currentSlide = 0;
  }
  else if(currentSlide + n < 0){
    currentSlide = slideShowImages.length-1;
  }
  else{
    currentSlide += n;
  }
  console.log(currentSlide)
  img.src = slideShowImages[currentSlide][0]
  $("caption").textContent = slideShowImages[currentSlide][1]



}
changeSlide(0)