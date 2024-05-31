import loadAbout from "./about";
import loadHome  from "./home";



const home =document.querySelector('.home')
const abt = document.querySelector('.about')

abt.addEventListener('click',loadAbout)
home.addEventListener('click',loadHome)

loadHome();