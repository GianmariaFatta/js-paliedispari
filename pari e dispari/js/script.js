// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const numberElement=document.getElementById("number")
const buttonElement=document.getElementById("button")
const winnerElement=document.getElementById("winner")
const pcResultElement=document.getElementById("pcresult")
const userResultElement=document.getElementById("userresult")
const totalElement=document.getElementById("total")
const selectElement=document.getElementById("select")



let select=""


buttonElement.addEventListener("click", function(){
    
   
   
    


    userChoice=parseInt(numberElement.value);
    numberElement.value=""
    // console.log(userChoice)

    

    random= randomNumber(max=1, min=5, )
    
    pcResultElement.innerHTML=`<span class="text-center d-block h3 text-danger"> IL PC HA SCELTO ${random} !</span>`;

    let totalNumber= (userChoice+random)
    totalElement.innerHTML=`<span class="text-center h3 text-warning"> IL TOTALE È ${totalNumber}  !</span>`

    userResultElement.innerHTML=`<span class="text-center h3 text-warning"> HAI SCELTO ${userChoice} !</span>`
    
    if(userChoice<1 || userChoice>5 || isNaN(userChoice)){
        winnerElement.innerText=`shame!`;
        pcResultElement.innerHTML=` `
        totalElement.innerHTML=` `
        userResultElement.innerHTML=` `
        
    }else{
        winnerElement.innerText=``
    }
    function randomNumber(min,max){
        random=parseInt(Math.floor(Math.random ()*(max - min +1)) )+1;
        max++;
        return random;
        
    }
    
    if( (totalNumber % 2 === 0) && selectElement.value ==="1" ){
        winnerElement.innerHTML=`<span class="text-center h3 text-success"> PARI! HAI VINTO  !</span>`
    }else if ((totalNumber % 2 === 0) && selectElement.value ==="2" ){
        winnerElement.innerHTML=`<span class="text-center h3 text-danger"> PARI! MI DISPIACE HAI PERSO  !</span>`
    }else if ((totalNumber % 2 === 1) && selectElement.value ==="2" ){
        winnerElement.innerHTML=`<span class="text-center h3 text-success"> DISPARI! HAI VINTO  !</span>`}
        else if ((totalNumber % 2 === 1) && selectElement.value ==="1" ){
            winnerElement.innerHTML=`<span class="text-center h3 text-danger"> DISPARI! MI DISPIACE HAI PERSO  !</span>`}
    
})





