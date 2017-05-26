'use strict';

//Global
var productsArray = [];
var justShown = [];
var clicks = 0;
//Globals from DOM
var productLeft = document.getElementById('productLeft');
var productCenter = document.getElementById('productCenter');
var productRight = document.getElementById('productRight');

//object constructor
function Product(name, path){
  this.name = name;
  this.path = path;
  this.clickCounter = 0;
  this.displayCounter = 0;
  productsArray.push(this);
}

Product.prototype.percentage = function() {
  return (this.clickCounter / this.displayCounter) * 100.0;
};

//Instantiatiing new products
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

//Random Number Generator to be assigned to a picture
function randomNum() {
  return Math.floor(Math.random() * productsArray.length);
}

function randomImgs() {
  for (var i = 0; i < 3; i++) {
    var num = randomNum();
    while (justShown.includes(num)) {
      num = randomNum();
    }
    justShown.push(num);
  }

  if (clicks >= 1 ) {
    for (var j = 0; j < 3; j++) {
      justShown.shift();
    }
  }

  return justShown;
}

//Actual display of the image
function render() {
  var indexArr = randomImgs();
  productLeft.src = productsArray[indexArr[0]].path;
  productCenter.src = productsArray[indexArr[1]].path;
  productRight.src = productsArray[indexArr[2]].path;

  productsArray[indexArr[0]].displayCounter ++;
  productsArray[indexArr[1]].displayCounter ++;
  productsArray[indexArr[2]].displayCounter ++;
}

function newClick(e){
  var selected = e.target.getAttribute('src');

  for (var i = 0; i < productsArray.length; i++) {
    if (selected === productsArray[i].path) {
      productsArray[i].clickCounter ++;
      clicks ++;
    }
  }
  render();
  stop();
}

function stop(){
  var productBox = document.getElementById('productBox');
  if (clicks >= 25) {
    productBox.style.display = 'none';
    results();
  }
}

function getPropVals(key) {
  var vals = [];
  for (var i = 0; i < productsArray.length; i++) {
    vals.push(productsArray[i][key]);
  }
  return vals;
}

//Colors of chart
function randomColors() {
  var colors = [];

  for (var i = 0; i < productsArray.length; i++) {
    var newColor = [];
    while(colors.includes('rgb(' + newColor.join() + ')') || newColor.length < 1) {
      for (var j = 0; j < 3; j++) {
        newColor.push(Math.floor(Math.random()*256));
      }
    }
    colors.push('rgb(' + newColor.join() + ')');
  }
  return colors;
}

//Chart displays value obtained
function results() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getPropVals('name'),
      datasets: [{
        label: 'Product Clicks',
        data: getPropVals('clickCounter'),
        backgroundColor: randomColors()
      }, {
        label: 'Times Shown',
        data: getPropVals('shownCounter')
      }]
    },
    options: {
      responsive: false,
      fontSize: 20,
    }
  });
}

render();

productLeft.addEventListener('click', newClick);
productCenter.addEventListener('click', newClick);
productRight.addEventListener('click', newClick);
