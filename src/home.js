import pic from './assets/images/home_page.jpg'

export default function loadHome(){
    const content = document.getElementById('content')
    content.innerHTML=""

    content.classList.add('container','text-center', 'mt-5')
    const heading =document.createElement('h1')
    heading.classList.add('display-2')
    heading.innerText = 'Nebula Bistro'
    const subHeading = document.createElement('h5')
    subHeading.innerText="Open 24x7"
    subHeading.classList.add('mb-4')
    
    const image = new Image();
    image.src = pic
    image.classList.add('img-fluid','mb-5')
    content.appendChild(heading)
    content.appendChild(subHeading)
    content.appendChild(image)
}