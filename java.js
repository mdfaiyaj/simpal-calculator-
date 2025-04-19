const btnEle = document.querySelectorAll("button")
const inputEle = document.getElementById("result")
for(let i=0; i<btnEle.length; i++){
    btnEle[i].addEventListener("click",()=>{
        const btnValue=btnEle[i].textContent
         if(btnValue === "c"){
            clearResult()
         }
         else if(btnValue === "="){
            calculateResult()
         } 
         else{
            appendValue(btnValue)
         }
    })
}
function clearResult(){
    inputEle.value = ""
}
function calculateResult(){
     inputEle.value = eval(inputEle.value)
}
function appendValue(btnValue){
 inputEle.value += btnValue
}