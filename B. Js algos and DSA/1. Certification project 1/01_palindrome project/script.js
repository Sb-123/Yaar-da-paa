const textInput=document.getElementById("text-input")
const checkButton=document.getElementById("check-btn")
const result=document.getElementById("result")

checkButton.addEventListener("click",()=>{
    
    const trimed= textInput.value.trim();
    textInput.value="";
    

    const lowerReplaced=trimed.toLowerCase().replace(/[^a-z0-9]/g,"")
    
    if(trimed===""){
        alert("Please input a value")
    }else if(trimed.length===1){
        result.innerText=`${trimed} is a palindrome`;
    }else if(lowerReplaced=== [...lowerReplaced].reverse().join("")){
        result.innerText=`${trimed} is a palindrome`

    }else{
        result.innerText=`${trimed} is not a palindrome`
    }
});

