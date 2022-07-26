'use strict';

//Constructor function for Toy:

function Toy(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `${this.name}.${fileExtension}`;
  this.numClicks = 0;
  this.numViews = 0; 
}

render: function (body) {

}


//EXECUTABLE CODE

let toysArray = [
  new Toy('bag', 'jpg'),
  new Toy('banana', 'jpg'),
  new Toy('bathroom', 'jpg'),
  new Toy('boots', 'jpg'),
  new Toy('breakfast', 'jpg'),
  new Toy('bubblegum', 'jpg'),
  new Toy('chair', 'jpg'),
  new Toy('cthulhu', 'jpg'),
  new Toy('dog-duck', 'jpg'),
  new Toy('dragon', 'jpg'),
  new Toy('pen', 'jpg'),
  new Toy('pet-sweep', 'jpg'),
  new Toy('scissors', 'jpg'),
  new Toy('shark', 'jpg'),
  new Toy('sweep', 'png'),
  new Toy('tauntaun', 'jpg'),
  new Toy('unicorn', 'jpg'),
  new Toy('water-can', 'jpg'),
  new Toy('wine-glass', 'jpg'),
];


// method function to render

// .render 
// maybe check in here for not showing same photo twice

// there is no potential for users to add additional goats in this lab... so normally using its index could lead you to trouble iwht reordered array, but not in this case

// need to randomly generate photos of goats
// randomly generate a number

// today: dont have same goat twie
// tomorrow: dont have same goat show up again in next round

// event listener for 
// goat click needs to rerender and increment the vote

// once we hit 15 rounds, something gets triggered, to display results. so a for loop or function for this.

// section img:hover{
// border: 5px solid rgb(# # #);
// cursor: pointer;

// layout shift (link "bounces" looks like, and it could break our layout and be bad looking) Can get around it by this little trick. 

// In section img: just make it transparent instead of color. it's a good way to avoid layout shift.



// pointer-events: none;

// section + div.clicks-allowed {
// 	pointer-events: auto;
// 	cursor: pointer;
// 	background-color: rosybrown;
// 	color: white;
// }
// section + div.clicks-allowed.hover {
// 	background-color: green;
// }

// Need a window into the DOM,

// use the container of the two pictures.
// (I can use event bubbling, to listen to the entire container and listen to events in the whole section.)

// These are my global variables:

// let myContainer = document.querySelector('section');

// let myButton = document.querySelector('section + div');

// "section + div means ...to a div, find an immediate siblin that was a section

// let image1 =  document.querySelector('section img:first-child');

// let image2 = document.querySelector('section img:nth-child(2);


// this replaces the img src so leave two empty <img> tags and lets dom create the html of above to fill in src for photos

// let allGoats=[];
// let clicks = 0;
// let clicksAllowed = 15;



// EXECUTABLE CODE below:
// ---

// image1.src = allGoats[0].src;
// image2.src = allGoats[1].src;


// how to generate a dynamic number of goats. make and call a function:

// function getRandomGoat();
// I want a value between two numbers like 0-6.

// return Math.floor(random() * allGoats.length);
// }

// function renderGoats() {
// let goat1 = getRandomGoat();
// let goat2 = get RandomGoat(); 

// ** Using includes() Method: If array contains an object/element can be determined by using includes() method. This method returns true if the array contains the object/element else return false.Jul 20, 2021

// How to check if an array includes an object in JavaScript?https://www.geeksforgeeks.org › how-to-check-if-an-arra...
// About featured snippets
// •
// Feedback
// People also ask
// How do you check if an array contains an item?
// The simplest and fastest way to check if an item is present in an array is by using the Array. indexOf() method. This method searches the array for the given item and returns its index. If no item is found, it returns -1.May 25, 2020
// **

	
// while (goat1 === goat 2){
// goat 2 = getRandomGoat();

// 	image1.src = allGoats[goat1].src;
// 	image2.src = allGoats[goat2].src;
// image1.alt= allGoats [goat1].name;
// image2.alt = allGoats [goat2].name;

// allGoats[goat1].views++;
// allGoats[goat2].views++;

// -----

// Add event listener:
// in executeable function

// myContainer.addEventListener('click', handleGoatClick);

// function handleGoatClick(event)	{
// if (event.target === myContainer){	
// 	alert('Please click on an image');
// 	}
	
// 	clicks++;
// 	let clickedGoat = event.target.alt;
// 	console.log(clickedGoat); It's letting me know which goat I clicked on by the alt name of the image.
	
// 	for (let i=0; i< allgoats.length, i++){
// 		if {clickedGoat === allGoats[i].name {
// 		allGoats[i[.clicks++;
// 		break;
// 		}
// 		}
// 		}	
		
// tomorrow: make sure goat of previous round doesn't show up in next round

// renderGoats();
//   if {clicks === clickAllowed}
//     make voting stop, by removing event listener
//     myContainer.removeEventListener('click', handleGoatClick); 
//     myButton.addEventListener('click', handleButtonClick);
//     myButton.className = 'clicks-allowed';
    
    
    
//     function handleButtonClick(event) {
//     if (clicks === clicksAllowed}
// 	renderResults();
// 	}}    
    
//     function renderResults(){
//       let ul = document.querySelector ('ul');
//      //for each goat in my array, generate an li that will say this: "name had x number of views and was clicked on x times"
     
//      for (let i=0; i <allGoats.length; i++){
     
//      let li = document.CreateElement('li');
//      li.textContent = `${allGoats[i].name} had ${allGoats[i].views} number of views and was clicked on {allGoats[i].clicks} times`;
//      ul.appendChild(li);


// You should only need for one event listener for product voting.     
     
