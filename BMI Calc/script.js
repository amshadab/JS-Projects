const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector("#height").value)
    const weight=parseInt(document.querySelector("#weight").value)
    const results=document.querySelector("#results")

    if(height==='' || height<0 || isNaN(height)){
     results.innerHTML= "Please give a valid height"
    }
     else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML= "Please give a valid weight"
    }
    else{
       const bmi = (weight/((height*weight)/10000)).toFixed(2)
       

        if(bmi<18.6){
           results.innerHTML=`BMI: ${bmi}<br> You are Under Weight`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML=`BMI: ${bmi}<br> You are in Normal range`
        }
        else{
            results.innerHTML=`BMI: ${bmi}<br> You are Overweight`
        }
    }

    
    
})

