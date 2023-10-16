const randId = document.querySelector('.rand-id')
const btn = document.querySelector('button')

// Generate Pseudo Random String, if safety is important use dedicated crypto/math library for less possible collisions!
function generateID(length) {
    let text = ""
    const possible = "ABCDEF0123456789GHIJKLMNOPQRSTUV0123456789WXYZ0123456789"

    for(let i = 0; i < length; i++)  {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
}

randId.innerText = generateID(4) 

btn.addEventListener('click', () => {
  randId.innerText = generateID(4) 
})
