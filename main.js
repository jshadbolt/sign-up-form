let pwd1 = document.getElementById('pwd')
let pwd2 = document.getElementById('pwd-confirm')
let pwdFields = [pwd1, pwd2]
let errorMsg = document.querySelector('.error-msg')



pwdFields.forEach(field => {
    field.addEventListener('input', () => {
        if (pwd2.value === pwd1.value && field.value.length > 0) {
            pwd1.classList.add('passed')
            pwd2.classList.add('passed')
            errorMsg.textContent = ''
        } else if (pwd2.value !== pwd1.value && field.value.length > 0 && pwd2.value.length > 0) {
            pwd1.classList.remove('passed')
            pwd2.classList.remove('passed')
            errorMsg.textContent = 'Check password matching'
        } else {
            pwd1.classList.remove('passed')
            pwd2.classList.remove('passed')
            errorMsg.textContent = ''
        }
    })
})

