const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color+=hex[Math.round(Math.random()*16)]
    }
    return color

}
console.log(randomColor());

const body = document.querySelector('body')
const start= document.getElementById('start')
const stop = document.getElementById('stop')


let timer;
start.addEventListener('click',function(e){
    timer=setInterval(function(){
        body.style.backgroundColor=randomColor()
    },1000)

})

stop.addEventListener('click',function(e){
    clearInterval(timer)
})