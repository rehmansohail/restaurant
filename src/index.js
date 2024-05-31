import loadAbout from "./about";
import loadHome  from "./home";
import loadMenu from "./menu";
import './style.css'


const home =document.querySelector('.home')
const abt = document.querySelector('.about')
const menu = document.querySelector('.menu')

abt.addEventListener('click',loadAbout)
home.addEventListener('click',loadHome)
menu.addEventListener('click',loadMenu)

loadHome();