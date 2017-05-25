'use strict';
var imgArr = [];
var imgDisplayed = [];
var lastShown = [];
var counter = 0;
var list = document.getElementById('list');

// Creating a constructor for each product
function Product(name, path){
  this.name = name;
  this.path = path;
  this.timesclicked = 0;
  this.timesselected = 0;
  imagesArray.push(this);
}

//Create array of product objects//
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

//Random image generator from array for three images at one time
function randomImages(max){
  for(var x = 0; x < 3; x++);{
    imgDisplayed.push(imgArr[Math.floor(Math.random() * max)]);
  } while(imgDisplayed[0] === lastShown[0] || imgDisplayed[0] === lastShown[1] || imgDisplayed === lastShown[2] || imgDisplayed[0] === imgDisplayed[1] || imgDisplayed[0] === imgDisplayed[2]){
    imgDisplayed.splice(0, 1, imgArr[Math.floor(Math.random() * max)]);
  }   while(imgDisplayed[1] === lastShown[0] || imgDisplayed[1] === lastShown[1] || imgDisplayed[1] === lastShown[2] || imgDisplayed[1] === imgDisplayed[0] || imgDisplayed[1] === imgDisplayed[2]){
    imgDisplayed.splice(1, 1, imgArr[Math.floor(Math.random() * max)]);
  }
  while(imgDisplayed[2] === lastShown[0] || imgDisplayed[2] === lastShown[1] || imgDisplayed[2] === lastShown[2] || imgDisplayed[2] === imgDisplayed[1] || imgDisplayed[2] === imgDisplayed[0]){
    imgDisplayed.splice(2, 1, imgArr[Math.floor(Math.random() * max)]);
  }
  return imgDisplayed;
}

randomImages(imgArr.length);

//Clicks through the images
function clicking(click){
  for (var i = 0; i < imgArr.length; i++){
    if(imgArr[i].name === click) {
      imgArr[i].timesclicked ++;
      console.log(imgArr[i].timesclicked);
    }
  }
}
