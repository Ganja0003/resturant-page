/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialPageLoad: () => (/* binding */ initialPageLoad)
/* harmony export */ });
function initialPageLoad(){
alert('ganja');
const contentDiv = document.querySelector("#content");


/* home 
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


*/

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

_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O1VDOUxBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOUMsK0RBQXNCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKXtcbmFsZXJ0KCdnYW5qYScpO1xuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuXG4vKiBob21lIFxuLy9jcmVhdGUgZWxlbWVudHNcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaG9tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cbi8vYWRkIGNsYXNzIGxpc3Qgb3IgaWRcbm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbmhvbWVCb3guY2xhc3NMaXN0LmFkZChcImhvbWUtYm94XCIpO1xuaW1hZ2UuaWQ9XCJob21lLWltZ1wiO1xuXG5cblxuLy9pbm5lckhUTUwgICBcbnRpdGxlLmlubmVySFRNTCA9ICdLdSBzb28gZGhvd29vdyBLQyBDaGlja2VuICYgQ2hpcCc7XG50ZXh0LmlubmVyVGV4dCA9IFwiTXVxZGlzaG8gdW51a2FhIGxlaFwiO1xuXG5cbi8vYXBwZW5kXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW4pO1xubWFpbi5hcHBlbmRDaGlsZChob21lKTtcbmhvbWUuYXBwZW5kQ2hpbGQoaG9tZUJveCk7XG5ob21lQm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbmhvbWVCb3guYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuaG9tZUJveC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuXG5pbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcmVzdHVyYW50LmpwZWdcIjtcblxuXG5cblxuLy9jcmVhdGUgZWxlbWVudHNcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL2l0ZW1zXG5jb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vaXRlbSB0aXRsZXNcbmNvbnN0IGl0ZW0xVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaXRlbTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBpdGVtM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmNvbnN0IGl0ZW00VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgaXRlbTVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCBpdGVtNlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuLy9pdGVtcyBpbWcgXG5jb25zdCBpdGVtMUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaXRlbTJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGl0ZW0zSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jb25zdCBpdGVtNEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuY29uc3QgaXRlbTVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmNvbnN0IGl0ZW02SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbi8vaXRlbSBwXG5jb25zdCBpdGVtMXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtMnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtM3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBpdGVtNnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbi8vYWRkIGNsYXNzIGxpc3Qgb3IgaWRcblxubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5tZW51Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtYm94Jyk7XG5tZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuXG5pdGVtMS5jbGFzc0xpc3QuYWRkKCdpdGVtLTEnKTtcbml0ZW0yLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tMicpO1xuaXRlbTMuY2xhc3NMaXN0LmFkZCgnaXRlbS0zJyk7XG5pdGVtNC5jbGFzc0xpc3QuYWRkKCdpdGVtLTQnKTtcbml0ZW01LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tNScpO1xuaXRlbTYuY2xhc3NMaXN0LmFkZCgnaXRlbS02Jyk7XG5cblxuXG4vL2lubmVySFRNTCAgXG50aXRsZS5pbm5lclRleHQgPSAnS0MgQ2hpY2tlbiAmIENoaXBzIE1lbnUnXG5cbml0ZW0xVGl0bGUuaW5uZXJUZXh0ID0gJ0J1cmdlcic7XG5pdGVtMlRpdGxlLmlubmVyVGV4dCA9ICdQaXp6YSc7XG5pdGVtM1RpdGxlLmlubmVyVGV4dCA9ICdTdXNoaSc7XG5pdGVtNFRpdGxlLmlubmVyVGV4dCA9ICdGcmllcyc7XG5pdGVtNVRpdGxlLmlubmVyVGV4dCA9ICdDaGlja2VuJztcbml0ZW02VGl0bGUuaW5uZXJUZXh0ID0gJ0Zpc2gnO1xuXG5cbml0ZW0xcC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwnO1xuaXRlbTJwLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCc7XG5pdGVtM3AuaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsJztcbml0ZW00cC5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwnO1xuaXRlbTVwLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCc7XG5pdGVtNnAuaW5uZXJUZXh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsJztcblxuLy9pbWcgc3JjXG5cbml0ZW0xSW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2J1cmdlci5qcGVnJztcbml0ZW0ySW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3BpenphLmpwZWcnO1xuaXRlbTNJbWcuc3JjID0gJy4uL3NyYy9pbWFnZXMvc3VzaGkuanBlZyc7XG5pdGVtNEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9mcmllcy5qcGVnJztcbml0ZW01SW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2NoaWNrZW4uanBlZyc7XG5pdGVtNkltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9maXNoLmpwZWcnO1xuXG4vL2FwcGVuZFxuXG5jb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnUpO1xubWVudS5hcHBlbmRDaGlsZChtZW51Qm94KTtcbm1lbnVCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xubWVudUJveC5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4vL2l0ZW1zIHRvIG1lbnUgSXRlbXNcblxubWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0xKTtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChpdGVtMik7XG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbTMpO1xubWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW00KTtcbm1lbnVJdGVtcy5hcHBlbmRDaGlsZChpdGVtNSk7XG5tZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbTYpO1xuXG4vL2l0ZW1zIGNvbnRlbnRcblxuaXRlbTEuYXBwZW5kQ2hpbGQoaXRlbTFUaXRsZSk7XG5pdGVtMS5hcHBlbmRDaGlsZChpdGVtMUltZyk7XG5pdGVtMS5hcHBlbmRDaGlsZChpdGVtMXApO1xuXG5pdGVtMi5hcHBlbmRDaGlsZChpdGVtMlRpdGxlKTtcbml0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ySW1nKTtcbml0ZW0yLmFwcGVuZENoaWxkKGl0ZW0ycCk7XG5cbml0ZW0zLmFwcGVuZENoaWxkKGl0ZW0zVGl0bGUpO1xuaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNJbWcpO1xuaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNwKTtcblxuaXRlbTQuYXBwZW5kQ2hpbGQoaXRlbTRUaXRsZSk7XG5pdGVtNC5hcHBlbmRDaGlsZChpdGVtNEltZyk7XG5pdGVtNC5hcHBlbmRDaGlsZChpdGVtNHApO1xuXG5pdGVtNS5hcHBlbmRDaGlsZChpdGVtNVRpdGxlKTtcbml0ZW01LmFwcGVuZENoaWxkKGl0ZW01SW1nKTtcbml0ZW01LmFwcGVuZENoaWxkKGl0ZW01cCk7XG5cbml0ZW02LmFwcGVuZENoaWxkKGl0ZW02VGl0bGUpO1xuaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZJbWcpO1xuaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZwKTtcblxuXG4qL1xuXG4vL2NyZWF0ZVxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGFib3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4vL2NsYXNzIFxuXG5hYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuYWJvdXRCb3guY2xhc3NMaXN0LmFkZCgnYWJvdXQtYm94Jyk7XG5cbi8vaW5uZXJUZXh0XG5cbnRpdGxlLmlubmVyVGV4dCA9ICdBYm91dCBVcyc7XG50ZXh0LmlubmVyVGV4dCA9ICd3ZSBhcmUgbG9jYXRlZCBpbiB0aGUgYmVzdCBkaXN0cmljdCBpbiBtdXFkaXNobyB3aGljaCBpcyB3YWRhamlyIGNvbWUgIGFuZCB2aXNpdCBhbmQgd2UgcHJvbWlzZSB5b3Ugd29uIHJlZ3JldCBpdCc7XG5cblxuLy9hcHBlbmRcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRCb3gpO1xuYWJvdXRCb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuYWJvdXRCb3guYXBwZW5kQ2hpbGQodGV4dCk7XG5cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSAnLi9pbml0aWFsLXBhZ2UtbG9hZCc7XG5tb2R1bGUuaW5pdGlhbFBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9