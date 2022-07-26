'use strict';

//Constructor function for Product:

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${this.name}.${fileExtension}`;
  this.numClicks = 0;
  this.numViews = 0;
}


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
    let img = document.createElement('img');
    img.setAttribute('src', candidateProducts[i].src);
    img.setAttribute('data-product-name', candidateProducts[i].name);
    section.appendChild(img);
    candidateProducts[i].numViews++;
    saveToLocalStorage();
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
      saveToLocalStorage();
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

function handleViewResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < productsArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${productsArray[i].name} had ${productsArray[i].numClicks} vote(s) and was seen ${productsArray[i].numViews} time(s).`;
    ul.appendChild(li);
  }

  let labels = [];
  let numClicks = [];
  let numViews = [];
  let percentClicked = [];
  for (let i = 0; i < productsArray.length; i++) {
    labels[i] = productsArray[i].name;
    numClicks[i] = productsArray[i].numClicks;
    numViews[i] = productsArray[i].numViews;
    if (productsArray[i].numViews === 0) {
      percentClicked[i] = 0;
    } else {
      percentClicked[i] = Math.round(productsArray[i].numClicks * 1000 / productsArray[i].numViews) / 10;
    }
  }

  let chartConfig = {
    type: 'bar',
    options: {
      interaction: {
        mode: 'index',
      },
      plugins: {
        title: {
          display: true,
          text: 'Number of Clicks (Votes) and Views, per Product',
          font: {
            size: 16,
          },
        },
        tooltip: {
          boxPadding: 2,
          position: 'nearest',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Product',
            font: {
              weight: 'bold',
            },
          },
        },
        y: {
          title: {
            display: true,
            text: 'Number of Clicks/Views',
            font: {
              weight: 'bold',
            },
          },
        },
      },
    },
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Clicks',
          data: numClicks,
          grouped: false,
          barPercentage: 0.7,
          backgroundColor: 'rgb(215, 236, 251)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
        },
        {
          label: 'Views',
          data: numViews,
          grouped: false,
          barPercentage: 0.95,
          backgroundColor: 'rgba(139, 0, 139, 1.0)',
          borderColor: 'rgb(139, 0, 139)',
          borderWidth: 1,
        },
      ],
    },
  };

  let canvas = document.createElement('canvas');
  let chart = new Chart(canvas, chartConfig);

  let div = document.createElement('div');
  div.appendChild(canvas);

  let article = document.querySelector('article');
  article.replaceChildren(div);

  let section = document.getElementById('productOptions');
  let p = document.createElement('p');
  p.textContent = 'Thank you for your input. Results shown below.';
  section.replaceChildren(p);
}


function saveToLocalStorage() {
  let productsArrayJSON = JSON.stringify(productsArray);
  window.localStorage.setItem('productsArrayString', productsArrayJSON);
}

function loadFromLocalStorage() {
  let productsArrayValue = window.localStorage.getItem('productsArrayString');
  if (productsArrayValue !== null) {
    productsArray = JSON.parse(productsArrayValue);
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

loadFromLocalStorage();
startRound();
