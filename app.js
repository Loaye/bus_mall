'use strict';

var counter = 0;

// Creating a constructor for each product
function Product(name, url){
  this.name = name;
  this.url = url;
  this.timesclicked = 0;
  this.timesselected = 0;
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
