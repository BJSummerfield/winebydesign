import Form from './data/contactForm.js'
import Nav from './views/nav.js'
const form = new Form
const nav = new Nav

let contactFormButton = document.querySelector('#contactForm')
let content = document.querySelector('.content')
contactFormButton.addEventListener('click', function(){
  nav.newNav(content,form.html)
})

