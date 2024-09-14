const generateBtn = document.getElementById('generateBtn')
const passwordInput = document.getElementById('password')
const lenght = 12

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghiklmnopqrstuvwxyz'
const number = '0123456789'
const symbols = '!@#$%ˆ&*()_+{}[]-=|/~'

const allChars = upperCase + lowerCase + number + symbols

function createPassword() {
  let password = ''
  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }

  passwordInput.value = password
}

function copyPassword(){
  passwordInput.select()
  document.execCommand("Copy")
}

generateBtn.addEventListener('click', createPassword)

//Commit