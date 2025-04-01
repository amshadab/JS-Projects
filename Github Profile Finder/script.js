const send = document.getElementById('send')
const username=document.getElementById('username')
let url
send.addEventListener('click',function(e){
    url = `https://api.github.com/users/${username.value}`
   
    const xhr = new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.onreadystatechange=function(){
        if(this.status===200){
          if(xhr.readyState===4){
            const data = JSON.parse(this.responseText)
            const followers = data.followers
            const following = data.following
            const profile= data.avatar_url
            const name = data.name
            const bio = data.bio

            document.querySelector('.avatar').src = profile;
            document.querySelector('.username').innerHTML=name;
            document.querySelector('#bio').innerHTML=bio;
            document.querySelector('#followers').innerHTML=followers;
            document.querySelector('#following').innerHTML=following

            document.querySelector('.card').style.display="block";


            }
          else{
            document.querySelector('.card').style.display="block";
          }
        }
        else{
            document.querySelector('.card').style.display="block";
          }
        
    }
    xhr.send()
})

document.getElementById('profile-card').addEventListener('click',function(){
    window.location.href= `https://github.com/${username.value}`
})


   
