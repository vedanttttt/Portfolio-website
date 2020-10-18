const emailjs = require('emailjs-com');

const submitForm = (e) => {
	e.preventDefault();

	emailjs.sendForm('vedant','template_3ka19la','#contact-form','user_2sQbjpwQmHHkOdqN0XTpM')
	.then(result => alert('Your message has been sent.I will be in contact with you soon. Thank you!'))
	.catch(err => alert('Oops! Please try again'))
}

document.querySelector('.submitButton').addEventListener('click',submitForm);