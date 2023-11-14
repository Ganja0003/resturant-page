export function Home(){
alert('ganj2');
const contentDiv = document.querySelector("#content");
contentDiv.replaceChildren();



// HOME

//create elements
const main = document.createElement("div");
const home = document.createElement('div');
const homeBox = document.createElement('div');
const title = document.createElement("h1");
const image = document.createElement('img');
const text = document.createElement("p");


//add class list or id
main.classList.add('main');
home.classList.add("home");
homeBox.classList.add("home-box");
image.id="home-img";



//innerHTML   
title.innerHTML = 'Ku soo dhowoow KC Chicken & Chip';
text.innerText = "Muqdisho unukaa leh";


//append
contentDiv.appendChild(main);
main.appendChild(home);
home.appendChild(homeBox);
homeBox.appendChild(title);
homeBox.appendChild(image);
homeBox.appendChild(text);


image.src = "../src/images/resturant.jpeg";


/*
//MENU
//create elements
const menu = document.createElement('div');
const menuBox = document.createElement('div');
const title = document.createElement('h1');
const menuItems = document.createElement('div');

//items
const item1 = document.createElement('div');
const item2 = document.createElement('div');
const item3 = document.createElement('div');
const item4 = document.createElement('div');
const item5 = document.createElement('div');
const item6 = document.createElement('div');

//item titles
const item1Title = document.createElement('h1');
const item2Title = document.createElement('h1');
const item3Title = document.createElement('h1');
const item4Title = document.createElement('h1');
const item5Title = document.createElement('h1');
const item6Title = document.createElement('h1');

//items img 
const item1Img = document.createElement('img');
const item2Img = document.createElement('img');
const item3Img = document.createElement('img');
const item4Img = document.createElement('img');
const item5Img = document.createElement('img');
const item6Img = document.createElement('img');

//item p
const item1p = document.createElement('p');
const item2p = document.createElement('p');
const item3p = document.createElement('p');
const item4p = document.createElement('p');
const item5p = document.createElement('p');
const item6p = document.createElement('p');

//add class list or id

menu.classList.add('menu');
menuBox.classList.add('menu-box');
menuItems.classList.add('menu-items');

item1.classList.add('item-1');
item2.classList.add('item-2');
item3.classList.add('item-3');
item4.classList.add('item-4');
item5.classList.add('item-5');
item6.classList.add('item-6');



//innerHTML  
title.innerText = 'KC Chicken & Chips Menu'

item1Title.innerText = 'Burger';
item2Title.innerText = 'Pizza';
item3Title.innerText = 'Sushi';
item4Title.innerText = 'Fries';
item5Title.innerText = 'Chicken';
item6Title.innerText = 'Fish';


item1p.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,';
item2p.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,';
item3p.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,';
item4p.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,';
item5p.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,';
item6p.innerText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,';

//img src

item1Img.src = '../src/images/burger.jpeg';
item2Img.src = '../src/images/pizza.jpeg';
item3Img.src = '../src/images/sushi.jpeg';
item4Img.src = '../src/images/fries.jpeg';
item5Img.src = '../src/images/chicken.jpeg';
item6Img.src = '../src/images/fish.jpeg';

//append

contentDiv.appendChild(menu);
menu.appendChild(menuBox);
menuBox.appendChild(title);
menuBox.appendChild(menuItems);

//items to menu Items

menuItems.appendChild(item1);
menuItems.appendChild(item2);
menuItems.appendChild(item3);
menuItems.appendChild(item4);
menuItems.appendChild(item5);
menuItems.appendChild(item6);

//items content

item1.appendChild(item1Title);
item1.appendChild(item1Img);
item1.appendChild(item1p);

item2.appendChild(item2Title);
item2.appendChild(item2Img);
item2.appendChild(item2p);

item3.appendChild(item3Title);
item3.appendChild(item3Img);
item3.appendChild(item3p);

item4.appendChild(item4Title);
item4.appendChild(item4Img);
item4.appendChild(item4p);

item5.appendChild(item5Title);
item5.appendChild(item5Img);
item5.appendChild(item5p);

item6.appendChild(item6Title);
item6.appendChild(item6Img);
item6.appendChild(item6p);




//create
const about = document.createElement('div');
const aboutBox = document.createElement('div');
const title = document.createElement('h1');
const text = document.createElement('p');

//class 

about.classList.add('about');
aboutBox.classList.add('about-box');

//innerText

title.innerText = 'About Us';
text.innerText = 'we are located in the best district in muqdisho which is wadajir come  and visit and we promise you won regret it';


//append
contentDiv.appendChild(about);
about.appendChild(aboutBox);
aboutBox.appendChild(title);
aboutBox.appendChild(text);
*/
}

