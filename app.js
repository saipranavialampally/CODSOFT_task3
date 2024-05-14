let inputbox=document.getElementById('inputbox')
let buttons=document.querySelectorAll('button')
let string=''
buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
         string = string == '' ? '0': string;
         try{
            string = String(eval(string))
         inputbox.value = string;
         }
         catch(error){
            inputbox.value = "Error(Press AC)"
         }
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputbox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            inputbox.value = string;
        }
        else if(b.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputbox.value = string;
        }
        else{
            string += b.target.innerText
            inputbox.value = string
        }
    })
})