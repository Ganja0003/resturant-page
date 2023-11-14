/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   About: () => (/* binding */ About)
/* harmony export */ });
function About(){
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

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home)
/* harmony export */ });
function Home(){
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



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
function Menu(){
    //MENU
//create elements
const contentDiv = document.querySelector('#content')
contentDiv.replaceChildren();
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
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load */ "./src/initial-page-load.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.Home)();





    let swicth = (function(){
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener("click",_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.Home)
    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_2__.Menu);
    const aboutBtn = document.querySelector('.about');
    aboutBtn.addEventListener('click',_about__WEBPACK_IMPORTED_MODULE_1__.About);
    
    })();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJPO0FBQ1A7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDN0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNYO0FBQ0Y7OztBQUc5Qix3REFBSTs7Ozs7O0FBTUo7QUFDQTtBQUNBLHFDQUFxQyxvREFBSTtBQUN6QztBQUNBLHFDQUFxQyx1Q0FBSTtBQUN6QztBQUNBLHNDQUFzQyx5Q0FBSztBQUMzQztBQUNBLEtBQUssSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gQWJvdXQoKXtcbiAgICAvL2NyZWF0ZVxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50RGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFib3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4vL2NsYXNzIFxuXG5hYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuYWJvdXRCb3guY2xhc3NMaXN0LmFkZCgnYWJvdXQtYm94Jyk7XG5cbi8vaW5uZXJUZXh0XG5cbnRpdGxlLmlubmVyVGV4dCA9ICdBYm91dCBVcyc7XG50ZXh0LmlubmVyVGV4dCA9ICd3ZSBhcmUgbG9jYXRlZCBpbiB0aGUgYmVzdCBkaXN0cmljdCBpbiBtdXFkaXNobyB3aGljaCBpcyB3YWRhamlyIGNvbWUgIGFuZCB2aXNpdCBhbmQgd2UgcHJvbWlzZSB5b3Ugd29uIHJlZ3JldCBpdCc7XG5cblxuLy9hcHBlbmRcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRCb3gpO1xuYWJvdXRCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuYWJvdXRCb3guYXBwZW5kQ2hpbGQodGV4dCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIEhvbWUoKXtcbmFsZXJ0KCdnYW5qMicpO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnRlbnREaXYucmVwbGFjZUNoaWxkcmVuKCk7XG5cblxuXG4vLyBIT01FXG5cbi8vY3JlYXRlIGVsZW1lbnRzXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXG4vL2FkZCBjbGFzcyBsaXN0IG9yIGlkXG5tYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbmhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5ob21lQm94LmNsYXNzTGlzdC5hZGQoXCJob21lLWJveFwiKTtcbmltYWdlLmlkPVwiaG9tZS1pbWdcIjtcblxuXG5cbi8vaW5uZXJIVE1MICAgXG50aXRsZS5pbm5lckhUTUwgPSAnS3Ugc29vIGRob3dvb3cgS0MgQ2hpY2tlbiAmIENoaXAnO1xudGV4dC5pbm5lclRleHQgPSBcIk11cWRpc2hvIHVudWthYSBsZWhcIjtcblxuXG4vL2FwcGVuZFxuY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluKTtcbm1haW4uYXBwZW5kQ2hpbGQoaG9tZSk7XG5ob21lLmFwcGVuZENoaWxkKGhvbWVCb3gpO1xuaG9tZUJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5ob21lQm94LmFwcGVuZENoaWxkKGltYWdlKTtcbmhvbWVCb3guYXBwZW5kQ2hpbGQodGV4dCk7XG5cblxuaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL3Jlc3R1cmFudC5qcGVnXCI7XG5cblxuLypcbi8vTUVOVVxuLy9jcmVhdGUgZWxlbWVudHNcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL2l0ZW1zXG5jb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vaXRlbSB0aXRsZXNcbmNvbnN0IGl0ZW0xVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaXRlbTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBpdGVtM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IGl0ZW00VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaXRlbTVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBpdGVtNlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuLy9pdGVtcyBpbWcgXG5jb25zdCBpdGVtMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaXRlbTJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGl0ZW0zSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBpdGVtNEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaXRlbTVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGl0ZW02SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbi8vaXRlbSBwXG5jb25zdCBpdGVtMXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtMnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtM3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbi8vYWRkIGNsYXNzIGxpc3Qgb3IgaWRcblxubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtYm94Jyk7XG5tZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXG5pdGVtMS5jbGFzc0xpc3QuYWRkKCdpdGVtLTEnKTtcbml0ZW0yLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tMicpO1xuaXRlbTMuY2xhc3NMaXN0LmFkZCgnaXRlbS0zJyk7XG5pdGVtNC5jbGFzc0xpc3QuYWRkKCdpdGVtLTQnKTtcbml0ZW01LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tNScpO1xuaXRlbTYuY2xhc3NMaXN0LmFkZCgnaXRlbS02Jyk7XG5cblxuXG4vL2lubmVySFRNTCAgXG50aXRsZS5pbm5lclRleHQgPSAnS0MgQ2hpY2tlbiAmIENoaXBzIE1lbnUnXG5cbml0ZW0xVGl0bGUuaW5uZXJUZXh0ID0gJ0J1cmdlcic7XG5pdGVtMlRpdGxlLmlubmVyVGV4dCA9ICdQaXp6YSc7XG5pdGVtM1RpdGxlLmlubmVyVGV4dCA9ICdTdXNoaSc7XG5pdGVtNFRpdGxlLmlubmVyVGV4dCA9ICdGcmllcyc7XG5pdGVtNVRpdGxlLmlubmVyVGV4dCA9ICdDaGlja2VuJztcbml0ZW02VGl0bGUuaW5uZXJUZXh0ID0gJ0Zpc2gnO1xuXG5cbml0ZW0xcC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwnO1xuaXRlbTJwLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCc7XG5pdGVtM3AuaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsJztcbml0ZW00cC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwnO1xuaXRlbTVwLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCc7XG5pdGVtNnAuaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsJztcblxuLy9pbWcgc3JjXG5cbml0ZW0xSW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2J1cmdlci5qcGVnJztcbml0ZW0ySW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BpenphLmpwZWcnO1xuaXRlbTNJbWcuc3JjID0gJy4uL3NyYy9pbWFnZXMvc3VzaGkuanBlZyc7XG5pdGVtNEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9mcmllcy5qcGVnJztcbml0ZW01SW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2NoaWNrZW4uanBlZyc7XG5pdGVtNkltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9maXNoLmpwZWcnO1xuXG4vL2FwcGVuZFxuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnUpO1xubWVudS5hcHBlbmRDaGlsZChtZW51Qm94KTtcbm1lbnVCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xubWVudUJveC5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4vL2l0ZW1zIHRvIG1lbnUgSXRlbXNcblxubWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0xKTtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChpdGVtMik7XG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbTMpO1xubWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW00KTtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChpdGVtNSk7XG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbTYpO1xuXG4vL2l0ZW1zIGNvbnRlbnRcblxuaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbTFUaXRsZSk7XG5pdGVtMS5hcHBlbmRDaGlsZChpdGVtMUltZyk7XG5pdGVtMS5hcHBlbmRDaGlsZChpdGVtMXApO1xuXG5pdGVtMi5hcHBlbmRDaGlsZChpdGVtMlRpdGxlKTtcbml0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ySW1nKTtcbml0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ycCk7XG5cbml0ZW0zLmFwcGVuZENoaWxkKGl0ZW0zVGl0bGUpO1xuaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNJbWcpO1xuaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNwKTtcblxuaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbTRUaXRsZSk7XG5pdGVtNC5hcHBlbmRDaGlsZChpdGVtNEltZyk7XG5pdGVtNC5hcHBlbmRDaGlsZChpdGVtNHApO1xuXG5pdGVtNS5hcHBlbmRDaGlsZChpdGVtNVRpdGxlKTtcbml0ZW01LmFwcGVuZENoaWxkKGl0ZW01SW1nKTtcbml0ZW01LmFwcGVuZENoaWxkKGl0ZW01cCk7XG5cbml0ZW02LmFwcGVuZENoaWxkKGl0ZW02VGl0bGUpO1xuaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZJbWcpO1xuaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZwKTtcblxuXG5cblxuLy9jcmVhdGVcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBhYm91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuLy9jbGFzcyBcblxuYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbmFib3V0Qm94LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWJveCcpO1xuXG4vL2lubmVyVGV4dFxuXG50aXRsZS5pbm5lclRleHQgPSAnQWJvdXQgVXMnO1xudGV4dC5pbm5lclRleHQgPSAnd2UgYXJlIGxvY2F0ZWQgaW4gdGhlIGJlc3QgZGlzdHJpY3QgaW4gbXVxZGlzaG8gd2hpY2ggaXMgd2FkYWppciBjb21lICBhbmQgdmlzaXQgYW5kIHdlIHByb21pc2UgeW91IHdvbiByZWdyZXQgaXQnO1xuXG5cbi8vYXBwZW5kXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0KTtcbmFib3V0LmFwcGVuZENoaWxkKGFib3V0Qm94KTtcbmFib3V0Qm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbmFib3V0Qm94LmFwcGVuZENoaWxkKHRleHQpO1xuKi9cbn1cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIE1lbnUoKXtcbiAgICAvL01FTlVcbi8vY3JlYXRlIGVsZW1lbnRzXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuY29udGVudERpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL2l0ZW1zXG5jb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vaXRlbSB0aXRsZXNcbmNvbnN0IGl0ZW0xVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaXRlbTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBpdGVtM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IGl0ZW00VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaXRlbTVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBpdGVtNlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuLy9pdGVtcyBpbWcgXG5jb25zdCBpdGVtMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaXRlbTJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGl0ZW0zSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBpdGVtNEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaXRlbTVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGl0ZW02SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbi8vaXRlbSBwXG5jb25zdCBpdGVtMXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtMnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtM3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbi8vYWRkIGNsYXNzIGxpc3Qgb3IgaWRcblxubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtYm94Jyk7XG5tZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXG5pdGVtMS5jbGFzc0xpc3QuYWRkKCdpdGVtLTEnKTtcbml0ZW0yLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tMicpO1xuaXRlbTMuY2xhc3NMaXN0LmFkZCgnaXRlbS0zJyk7XG5pdGVtNC5jbGFzc0xpc3QuYWRkKCdpdGVtLTQnKTtcbml0ZW01LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tNScpO1xuaXRlbTYuY2xhc3NMaXN0LmFkZCgnaXRlbS02Jyk7XG5cblxuXG4vL2lubmVySFRNTCAgXG50aXRsZS5pbm5lclRleHQgPSAnS0MgQ2hpY2tlbiAmIENoaXBzIE1lbnUnXG5cbml0ZW0xVGl0bGUuaW5uZXJUZXh0ID0gJ0J1cmdlcic7XG5pdGVtMlRpdGxlLmlubmVyVGV4dCA9ICdQaXp6YSc7XG5pdGVtM1RpdGxlLmlubmVyVGV4dCA9ICdTdXNoaSc7XG5pdGVtNFRpdGxlLmlubmVyVGV4dCA9ICdGcmllcyc7XG5pdGVtNVRpdGxlLmlubmVyVGV4dCA9ICdDaGlja2VuJztcbml0ZW02VGl0bGUuaW5uZXJUZXh0ID0gJ0Zpc2gnO1xuXG5cbml0ZW0xcC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwnO1xuaXRlbTJwLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCc7XG5pdGVtM3AuaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsJztcbml0ZW00cC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwnO1xuaXRlbTVwLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCc7XG5pdGVtNnAuaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsJztcblxuLy9pbWcgc3JjXG5cbml0ZW0xSW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2J1cmdlci5qcGVnJztcbml0ZW0ySW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BpenphLmpwZWcnO1xuaXRlbTNJbWcuc3JjID0gJy4uL3NyYy9pbWFnZXMvc3VzaGkuanBlZyc7XG5pdGVtNEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9mcmllcy5qcGVnJztcbml0ZW01SW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2NoaWNrZW4uanBlZyc7XG5pdGVtNkltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9maXNoLmpwZWcnO1xuXG4vL2FwcGVuZFxuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnUpO1xubWVudS5hcHBlbmRDaGlsZChtZW51Qm94KTtcbm1lbnVCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xubWVudUJveC5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4vL2l0ZW1zIHRvIG1lbnUgSXRlbXNcblxubWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0xKTtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChpdGVtMik7XG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbTMpO1xubWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW00KTtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChpdGVtNSk7XG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbTYpO1xuXG4vL2l0ZW1zIGNvbnRlbnRcblxuaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbTFUaXRsZSk7XG5pdGVtMS5hcHBlbmRDaGlsZChpdGVtMUltZyk7XG5pdGVtMS5hcHBlbmRDaGlsZChpdGVtMXApO1xuXG5pdGVtMi5hcHBlbmRDaGlsZChpdGVtMlRpdGxlKTtcbml0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ySW1nKTtcbml0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ycCk7XG5cbml0ZW0zLmFwcGVuZENoaWxkKGl0ZW0zVGl0bGUpO1xuaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNJbWcpO1xuaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNwKTtcblxuaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbTRUaXRsZSk7XG5pdGVtNC5hcHBlbmRDaGlsZChpdGVtNEltZyk7XG5pdGVtNC5hcHBlbmRDaGlsZChpdGVtNHApO1xuXG5pdGVtNS5hcHBlbmRDaGlsZChpdGVtNVRpdGxlKTtcbml0ZW01LmFwcGVuZENoaWxkKGl0ZW01SW1nKTtcbml0ZW01LmFwcGVuZENoaWxkKGl0ZW01cCk7XG5cbml0ZW02LmFwcGVuZENoaWxkKGl0ZW02VGl0bGUpO1xuaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZJbWcpO1xuaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZwKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9pbml0aWFsLXBhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL21lbnVcIjtcblxuXG5Ib21lKCk7XG5cblxuXG5cblxuICAgIGxldCBzd2ljdGggPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEhvbWUpXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsTWVudSk7XG4gICAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQnKTtcbiAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsQWJvdXQpO1xuICAgIFxuICAgIH0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9