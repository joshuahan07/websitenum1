
const themeBtn = document.querySelector('#theme')

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')

   if (document.body.classList.contains('dark')) {

    themeBtn.textContent = 'Light Mode'
  } 
  else 
    {
    themeBtn.textContent = 'Dark Mode'
  }
})


const contactForm = document.querySelector('#contact-form')
const formSuccess = document.querySelector('#form-success')

contactForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const name = document.querySelector('#formname').value
  const email = document.querySelector('#formemail').value
  const message = document.querySelector('#formmessage').value
if (!name || !email || !message) { return
  
}

  formSuccess.classList.remove('hidden')

    document.querySelector('#formname').value = ''
 document.querySelector('#formemail').value = ''
  document.querySelector('#formmessage').value = ''

  setTimeout(() => { 
    
    formSuccess.classList.add('hidden')
  }
  , 5000)
})