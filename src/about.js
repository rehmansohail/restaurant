export default function loadAbout(){
    const content = document.getElementById('content')
    content.innerHTML=""
    content.removeAttribute('class')
    content.classList.add('container','text-center', 'mt-5')
    const heading = document.createElement('h2')
    heading.classList.add('display-2')
    heading.classList.add('mb-3')
    heading.innerText = 'About'
    const para = document.createElement('p')
    para.innerText = "Welcome to Nebula Bistro, established in the year 10023 on Ganymede, the largest moon of Jupiter. Our interstellar café offers a unique dining experience with breathtaking views of the Gas Giant's swirling storms and vibrant auroras. Whether you're a space traveler or a Ganymede local, you'll find a cosmic oasis here, complete with zero-gravity seating and a menu inspired by the culinary traditions of Earth and beyond. Join us for an unforgettable journey through taste and space at Nebula Bistro."
    content.appendChild(heading)
    content.appendChild(para)
}