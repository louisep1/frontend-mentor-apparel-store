const email = document.getElementById('email')
const submit = document.getElementById('submit')
const warningMessage = document.querySelector('.warning-message')
const warningIcon = document.querySelector('.warning-icon')

const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const handleSubmit = e => {
  e.preventDefault()
  const isEmail = validateEmail(email.value)
  if (isEmail) {
    console.log(isEmail)
  } else {
    warningMessage.style.display = 'block'
    warningIcon.style.display = 'block'
  }
  email.value = ''
}

const toggleHidden = () => {
  warningMessage.style.display = 'none'
  warningIcon.style.display = 'none'
}

email.addEventListener('click', toggleHidden)

submit.addEventListener('click', handleSubmit)
