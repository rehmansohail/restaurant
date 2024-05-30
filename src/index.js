import {randomSuperhero} from 'superheroes';
const body = document.getElementById('content')
const text =document.createElement('h1')
text.innerText=randomSuperhero();
body.appendChild(text)