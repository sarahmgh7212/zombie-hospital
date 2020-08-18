console.log('Client side javascript file is loaded!')

const userForm = document.querySelector('form')
const search = document.querySelector('#pain_level')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

userForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:5000/api/hospitals?illnessId=' + illnessId+'&painLevel='+painLevel).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})