document.addEventListener('keydown',function(e){
    const h4 = document.querySelector('span')
    h4.textContent = `${e.key}`
})