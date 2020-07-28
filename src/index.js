import navBar from './navigation'
import authorDetails from './footer'
import welcomePage from './home'
import menu from './menu'
import contact from './contact';


const referenceElement = document.getElementById('content');
referenceElement.insertAdjacentElement('beforebegin', navBar.header)
referenceElement.insertAdjacentElement('afterend', authorDetails.footer)

const homeTab = document.querySelector('.home')
const menuTab = document.querySelector('.menu')
const contTab = document.querySelector('.contact')

homeTab.addEventListener('click', () => {
    homeTab.classList.add('active')
    referenceElement.innerHTML = '';
    referenceElement.appendChild(welcomePage.main)

    menuTab.classList.remove('active')
    contTab.classList.remove('active')
});

menuTab.addEventListener('click', () => {
    menuTab.classList.add('active')
    referenceElement.innerHTML = '';
    referenceElement.appendChild(menu.main)

    homeTab.classList.remove('active')
    contTab.classList.remove('active')
})

contTab.addEventListener('click', () => {
    contTab.classList.add('active')
    referenceElement.innerHTML = '';
    referenceElement.appendChild(contact.main)

    homeTab.classList.remove('active')
    menuTab.classList.remove('active')
})

const onLoad = (() => {
    homeTab.classList.add('active')
    referenceElement.innerHTML = '';
    referenceElement.appendChild(welcomePage.main)

    menuTab.classList.remove('active')
    contTab.classList.remove('active')
})()