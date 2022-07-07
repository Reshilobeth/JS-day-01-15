const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const newColor = `#${r}${g}${b}`

    document.body.style.backgroundColor = newColor
    color.innerHTML = newColor
})

