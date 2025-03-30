document.addEventListener('keydown',function(e){
    const h4 = document.querySelector('h4')
    h4.textContent = `Key pressed: ${e.key}`
})