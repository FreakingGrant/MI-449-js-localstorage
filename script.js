/**
 * Author: Grant Youngs
 */
var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var description = document.getElementById('description')
var email = document.getElementById('email')
var phone = document.getElementById('phone')

var preview = document.getElementById('preview') // The regular preview of the dating profile inputs
var rawPreview = document.getElementById('raw-preview') // The raw preview of the dating profile input html

var firstNameInput = ''
var lastNameInput = ''
var descriptionInput = ''
var emailInput = ''
var phoneInput = ''

/**
 * Updates the Preview and Raw HTML sections
 */
function updatePreview () {
  var message = '<h1>Hello! My name is ' + firstNameInput + ' ' + lastNameInput + '</h1>' +
  '<p>' + descriptionInput + '</p>' +
  "<p>If you're interested in a date, you can email me at <a href='mailto:" + emailInput + "' target='_blank'>" + emailInput + '</a>' +
  " or give me a call at <a href='tel:" + phoneInput + "' target='_blank'>" + phoneInput + '</a></p>'

  preview.innerHTML = message
  rawPreview.textContent = message
}

updatePreview() // Initial function call to display the information on screen

firstName.addEventListener('input', function () {
  firstNameInput = firstName.value
  updatePreview()
})

lastName.addEventListener('input', function () {
  lastNameInput = lastName.value
  updatePreview()
})

description.addEventListener('input', function () {
  descriptionInput = description.value
  updatePreview()
})

email.addEventListener('input', function () {
  emailInput = email.value
  updatePreview()
})

phone.addEventListener('input', function () {
  phoneInput = phone.value
  updatePreview()
})

function setTheme (theme) {
  document.body.setAttribute('class', theme)
  window.localStorage.setItem('theme', theme)
}

var theme = window.localStorage.getItem('theme')
document.body.setAttribute('class', theme)

var dayThemeButton = document.getElementById('day-theme-button')
var nightThemeButton = document.getElementById('night-theme-button')

dayThemeButton.addEventListener('click', () => {
  setTheme('day-theme')
})

nightThemeButton.addEventListener('click', () => {
  setTheme('night-theme')
})

var numVisits
if (!window.localStorage.getItem('numVisits')) {
  numVisits = 0
  // window.alert('=== blank')
} else {
  numVisits = parseInt(window.localStorage.getItem('numVisits'))
}

numVisits++

var visitorCounter = document.getElementById('visitor-counter')
visitorCounter.textContent = numVisits
window.localStorage.setItem('numVisits', numVisits)
