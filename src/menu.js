import coffee from './assets/images/coffee.png'
import tea from './assets/images/tea.jpg'
import dessert from './assets/images/dessert.jpg'

export default function loadMenu(){
    const content = document.getElementById('content')
    content.innerHTML=""
    content.removeAttribute('class')
    content.classList.add('container','text-center', 'mt-5')

    const heading = document.createElement('h2')
    heading.innerText="Menu"
    heading.classList.add('display-2')
    content.appendChild(heading)
    
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('row')

    const item1 = createCard(coffee,"COFFEE","Espresso",'Latte','Macchiato',5,5,7)
    item1.classList.add('col-md-4')
    cardContainer.appendChild(item1)

    const item2 = createCard(tea,"TEA","Lemon",'Jasmine','Green',4,4,4)
    item2.classList.add('col-md-4')
    cardContainer.appendChild(item2)

    const item3 = createCard(dessert,"DESSERTS","Brownie",'Cinnamon Roll','Cheesecake',3,3,10)
    item3.classList.add('col-md-4')
    cardContainer.appendChild(item3)
    cardContainer.classList.add('mb-5')

    content.appendChild(cardContainer)
    


}

function createCard(img, card_title, sub_it1,sub_it2,sub_it3,p1,p2,p3){
    const card = document.createElement('div')
    card.classList.add('card')
    card.style.cssText="width:18rem;"
    const image = new Image();
    image.src = img
    image.classList.add('card-img-top')
    card.appendChild(image)
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const cardBodyh5 = document.createElement('h5')
    cardBodyh5.innerText = card_title
    cardBodyh5.classList.add('card-title')
    cardBody.appendChild(cardBodyh5)
    card.appendChild(cardBody)

    const ul =document.createElement('ul')
    ul.classList.add('list-group','list-group-flush')
    const item1 = document.createElement('li')
    item1.innerText=`${sub_it1} - $${p1}`
    item1.classList.add('list-group-item')
    ul.appendChild(item1)
    const item2 = document.createElement('li')
    item2.innerText=`${sub_it2} - $${p2}`
    item2.classList.add('list-group-item')
    ul.appendChild(item2)
    const item3 = document.createElement('li')
    item3.innerText=`${sub_it3} - $${p3}`
    item3.classList.add('list-group-item')
    ul.appendChild(item3)
    card.appendChild(ul)
    return card
}