'use strict';

//Constructor function for Product:

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${this.name}.${fileExtension}`;
  this.numClicks = 0;
  this.numViews = 0;
}

Product.prototype = {
  render: function (section) {
    let img = document.createElement('img');
    img.setAttribute('src', this.src);
    img.setAttribute('data-product-name', this.name);
    section.appendChild(img);
  },
};

function getCandidateProducts() {
  let candidateProducts = [];
  let remainingProducts = Array.from(productsArray);
  while (candidateProducts.length < numProductsPerRound) {
    let chosenIndex = Math.floor(Math.random() * remainingProducts.length);
    if (!previousRound.includes(remainingProducts[chosenIndex])) {
      candidateProducts.push(remainingProducts[chosenIndex]);
    }
    remainingProducts.splice(chosenIndex, 1);
  }
  previousRound = candidateProducts;
  return candidateProducts;
}

function startRound() {
  let section = document.getElementById('productOptions');
  let candidateProducts = getCandidateProducts();
  for (let i = 0; i < candidateProducts.length; i++) {
    candidateProducts[i].render(section);
    candidateProducts[i].numViews++;
  }
  section.addEventListener('click', handleSelection);
  numRoundsShown++;
}

function endRound() {
  let section = document.getElementById('productOptions');
  section.removeEventListener('click', handleSelection);
  section.replaceChildren();
}

function handleSelection(event) {
  if (!event.target.hasAttribute('data-product-name')) {
    alert('Invalid selection. Please click on a product image.');
    return;
  }

  let selectedProductName = event.target.getAttribute('data-product-name');
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].name === selectedProductName) {
      productsArray[i].numClicks++;
      break;
    }
  }

  endRound();
  if (numRoundsShown < numRoundsPerSession) {
    startRound();
  } else {
    handleViewResults();
  }
}

// function showViewResultsButton() {
//   let button = document.createElement('button');
//   button.setAttribute('type', 'button');
//   button.textContent = 'View Results';
//   button.addEventListener('click', handleViewResults);
//   let section = document.getElementById('centerSection');
//   section.appendChild(button);
// }

function handleViewResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < productsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${productsArray[i].name} had ${productsArray[i].numClicks} vote(s) and was seen ${productsArray[i].numViews} time(s).`;
    ul.appendChild(li);
  }
}

//EXECUTABLE CODE

let productsArray = [
  new Product('bag', 'jpg'),
  new Product('banana', 'jpg'),
  new Product('bathroom', 'jpg'),
  new Product('boots', 'jpg'),
  new Product('breakfast', 'jpg'),
  new Product('bubblegum', 'jpg'),
  new Product('chair', 'jpg'),
  new Product('cthulhu', 'jpg'),
  new Product('dog-duck', 'jpg'),
  new Product('dragon', 'jpg'),
  new Product('pen', 'jpg'),
  new Product('pet-sweep', 'jpg'),
  new Product('scissors', 'jpg'),
  new Product('shark', 'jpg'),
  new Product('sweep', 'png'),
  new Product('tauntaun', 'jpg'),
  new Product('unicorn', 'jpg'),
  new Product('water-can', 'jpg'),
  new Product('wine-glass', 'jpg'),
];

let previousRound = [];

let numProductsPerRound = 3;
let numRoundsPerSession = 25;

let numRoundsShown = 0;

startRound();
