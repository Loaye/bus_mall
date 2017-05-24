'use strict';

var counter = 0;

// Creating a constructor for each product
function Product(name, url){
  this.name = name;
  this.url = url;
  this.timesclicked = 0;
  this.timesselected = 0;
}



Product.prototype.pickedMe = function(){
  counter++;
  this.timesclicked++;
};

Product.prototype.beenChosen = function(){
  this.timesselected++;
};

//Create array of product objects//
var bag = new Product('bag', 'image/bag.jpg');
var banana = new Product('banana', 'image/banana.jpg');
var bathroom = new Product('bathroom', 'image/bathroom.jpg');
var boots = new Product('boots', 'image/boots.jpg');
var breakfast = new Product('breakfast', 'image/breakfast.jpg');
var bubblegum = new Product('bubblegum', 'image/bubblegum.jpg');
var chair = new Product('chair', 'image/chair.jpg');
var cthulhu = new Product('cthulhu', 'image/cthulhu.jpg');
var dog_duck = new Product('dog_duck', 'image/dog_duck.jpg');
var dragon = new Product('dragon', 'image/dragon.jpg');
var pen = new Product('pen', 'image/pen.jpg');
var pet_sweep = new Product('pet_sweep', 'image/pet_sweep.jpg');
var scissors = new Product('scissors', 'image/scissors.jpg');
var shark = new Product('shark', 'image/shark.jpg');
var sweep = new Product('sweep', 'image/sweep.png');
var tauntaun = new Product('tauntaun', 'image/tauntaun.jpg');
var unicorn = new Product('unicorn', 'image/unicorn.jpg');
var usb = new Product('usb', 'image/usb.gif');
var water_can = new Product('water_can', 'image/water_can.jpg');
