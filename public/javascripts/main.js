import Form from './data/contactForm.js'
import Nav from './views/nav.js'

const form = new Form;
const nav = new Nav;
const content = document.querySelector('.content');
nav.newNav(content,form.html);

