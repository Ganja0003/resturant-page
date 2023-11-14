import { Home } from "./initial-page-load";
import { About } from "./about";
import { Menu } from "./menu";


Home();





    let swicth = (function(){
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener("click",Home)
    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click',Menu);
    const aboutBtn = document.querySelector('.about');
    aboutBtn.addEventListener('click',About);
    
    })();