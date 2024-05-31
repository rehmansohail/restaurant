export default function loadAbout(){
    const content = document.getElementById('content')
    content.innerHTML=""
    content.removeAttribute('class')
    content.classList.add('container','text-center', 'mt-5')
    const heading = document.createElement('h2')
    heading.innerText = 'About'
    const para = document.createElement('p')
    para.innerText = 'This restaurant was created in the year 10023 on Ganymede, the moon of jupiter'
    content.appendChild(heading)
    content.appendChild(para)
}