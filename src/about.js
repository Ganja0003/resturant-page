export function About(){
    //create
const contentDiv = document.querySelector('#content');
contentDiv.replaceChildren();
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
}