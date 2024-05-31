import pic from './assets/images/home_page.jpg'

export default function loadHome(){
    const content = document.getElementById('content')
    content.innerHTML=""

    content.classList.add('container','text-center', 'mt-5')
    const heading =document.createElement('h1')
    heading.innerText = 'Space Cafe'
    heading.classList.add('mb-4')
    const image = new Image();
    image.src = pic
    image.classList.add('img-fluid')
    content.appendChild(heading)
    content.appendChild(image)
}