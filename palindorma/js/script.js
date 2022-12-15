// Chiedere all’utente di inserire una parola tramiite un form
// Creare una funzione per capire se la parola inserita è palindroma

const resultElement=document.getElementById("result");
const buttonElement=document.getElementById("button");
const wordElement=document.getElementById("word")

let userWord=""
let wordReverse=""
//otteniamo la parola inserita dall'utente
buttonElement.addEventListener("click", function(){
    userWord=wordElement.value;
    const wordReverse= reverseWord(userWord)
    
    console.log(wordReverse);
    console.log(wordElement.value);
    
    if(wordElement.value===wordReverse){
        resultElement.innerHTML=`<p id="result" class="h3 text-success text-center"> this is a palindrome word</p>`
    }else{
        resultElement.innerHTML=`<p id="result" class="h3 text-danger text-center"> this is not a palindrome word</p>`
    }

    
    wordElement.value="";
}) 




//creiamo la funzione per invertire l'ordine della parola data
function reverseWord (word){
    let result="";
    
    for(let i= word.length -1; i>= 0 ; i-- ) 
    {
        result += word[i];
    }
    
    return result;
}

//usiamo la parola dell'utente nella nostra funzione.
