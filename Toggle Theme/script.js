const body = document.querySelector('body')
const dark = document.getElementById('dark')
const light = document.getElementById('light')

dark.addEventListener('click',function(e){
    body.style.backgroundColor='black'
    body.style.color='white'
})

light.addEventListener('click',function(e){
    body.style.backgroundColor='white'
    body.style.color='black'
})