const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_6qHYr9ywqZ2GtW99raJSfI85E5hwZzhgkjIOIkg1"

async function getData() {
    const response = await fetch(url)
    return await response.json()
}

const btn = document.getElementById('btn')
const to = document.getElementById('to')
const from = document.getElementById('from')
const msg = document.getElementById('msg')

btn.addEventListener('click',async (e)=>{
     e.preventDefault();

    if(from.value=='INR' && to.value=='USD'){
       const result = await getData();
      let from_rate=result.data.INR.value;
   
      let to_rate = result.data.USD.value;

      let amt = parseFloat(document.getElementById('amt').value)

      const converted = (amt/from_rate)*to_rate

      msg.innerText = `USD: ${converted}`
        
    }
    else if(from.value=='USD' && to.value=='INR'){
         const result = await getData();
      let from_rate=result.data.USD.value;
   
      let to_rate = result.data.INR.value;

      let amt = parseFloat(document.getElementById('amt').value)

      const converted = (amt/from_rate)*to_rate

      msg.innerText = `INR: ${converted}`
    }
    else{
         msg.innerText = "Please select correct Conversion"
    }
 
})

