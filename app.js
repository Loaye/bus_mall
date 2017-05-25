'use strict';

//Constructors for products
function Product(productName, filePath){
  this.productName = productName;
  this.filePath = filePath;
  this.timesDisplayed = 0;
  this.clicks = 0;
}

//Creating Instances
var bag = new Product('bag', 'image/bag.jpg');
var banana = new Product('banana', 'image/banana.jpg');
var bathroom = new Product('bathroom', 'image/bathroom.jpg');
var boots = new Product('boots', 'image/boots.jpg');
var breakfast = new Product('breakfast', 'image/breakfast.jpg');
var bubblegum = new Product('bubblegum', 'image/bubblegum.jpg');
var chair = new Product('chair', 'image/chair.jpg');
var cthulhu = new Product('cthulhu', 'image/cthulhu.jpg');
var dogDuck = new Product('dogDuck', 'image/dog-duck.jpg');
var dragon = new Product('dragon', 'image/dragon.jpg');
var pen = new Product('pen', 'image/pen.jpg');
var petSweep = new Product('petSweep', 'image/pet-sweep.jpg');
var scissors = new Product('scissors', 'image/scissors.jpg');
var shark = new Product('shark', 'image/shark.jpg');
var sweep = new Product('sweep', 'image/sweep.png');
var tauntaun = new Product('tauntaun', 'image/tauntaun.jpg');
var unicorn = new Product('unicorn', 'image/unicorn.jpg');
var usb = new Product('usb', 'image/usb.gif');
var waterCan = new Product('waterCan', 'image/water-can.jpg');

//Instances get pushed into the array
var productsList = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan];

//Assigning a variable to a displayed spot
var productLeft = document.getElementById('productLeft');
var productCenter = document.getElementById('productCenter');
var productRight = document.getElementById('productRight');

//Event listener per displayed position
productLeft.addEventListener('click', clickOnProductLeft);
productCenter.addEventListener('click', clickOnProductCenter);
productRight.addEventListener('click', clickOnProductRight);

var randomNumberLeft, randomNumberCenter, randomNumberRight;

//Function to create the images
imageMaker();

//Total clicks start at 0
var totalClicks;

//Creating 3 functions per image position
function clickOnProductLeft(){
  productsList[randomNumberLeft].clicks++;
  console.log('was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  if(totalClicks === 15){
    displayResults();
  }
}

function clickOnProductCenter(){
  productsList[randomNumberLeft].clicks++;
  console.log('was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  if(totalClicks === 15){
    displayResults();
  }
}

function clickOnProductRight(){
  productsList[randomNumberLeft].clicks++;
  console.log('was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  if(totalClicks === 15){
    displayResults();
  }
}

//Creating a random number to later assign to an image
function randomNum(){
  var randomNumber = Math.floor(Math.random() * productsList.length);
  return randomNumber;
}

//Function that creates a set of 3 to display on the screen
function imageMaker(){
  randomNumberLeft = randomNum();
  console.log(randomNumberLeft);
  randomNumberCenter = randomNum();
  while(randomNumberLeft === randomNumberCenter){
    randomNumberCenter = randomNum();
  }
  console.log(randomNumberCenter);
  randomNumberRight = randomNum;
  while(randomNumberRight === randomNumberLeft || randomNumberRight === randomNumberCenter){
    randomNumberRight = randomNum();
  }
  console.log(randomNumberRight);
  productLeft.src = productsList[randomNumberLeft].filePath;
  productsList[randomNumberLeft].timesDisplayed++;
  productCenter.src = productsList[randomNumberCenter].filePath;
  productsList[randomNumberCenter].timesDisplayed++;
  productRight.src = productsList[randomNumberRight].filePath;
  productsList[randomNumberRight].timesDisplayed++;
}

var button = document.getElementById('button');

//After results are given, removes hidden button attribure so you can get results
function displayResults(){
  button.removeAttribute('hidden');
}

button.addEventListener('click', buttonClicked);

function buttonClicked(){

}
