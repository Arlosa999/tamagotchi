// Create tamagotchi object & create metrics 
const tamagotchi={
    age: 0,
    hunger: 5,
    sleepiness: 5,
    boredom: 5
}
//feed the pet
const button2=document.querySelector("#feedMe")
const hungerContainer=document.getElementById("hungerContainer") //here I access to the feedme botton 
button2.addEventListener("click", function(){ // access the function when i click on the button 
  tamagotchi.hunger-=1 
  hungerContainer.textContent=`Hunger score: ${tamagotchi.hunger}`
  console.log(tamagotchi.hunger)  // 
})
// play with your pet 
const button3=document.querySelector("#playWithMe") //here I access to the feedme botton 
const boredomContainer=document.getElementById("boredomContainer") //here I access to the feedme botton 
button3.addEventListener("click", function(){ // access the function when i click on the button 
  tamagotchi.boredom-=1 
  boredomContainer.textContent=`Boredom score: ${tamagotchi.boredom}`
  console.log(tamagotchi.boredom)  // 
})
// turn on and turn off the light - I need to add change image to day and night picture 
const botton4=document.querySelector("#putMeToSleep")
const sleepinessContainer=document.getElementById("sleepinessContainer")
let index=0
botton4.addEventListener("click", function() {
  tamagotchi.sleepiness-=1
  function change(){
   const pictures =document.getElementById("#switch")
  }for (let i=0; i<pictures.length; i++){
    pictures[i].style.display="none"
  }
  index++
  if (index>=pictures.length){
    index=0
  }
  pictures[index].style.display="block"
    setTimeout(function(){
      pictures[index].style.display='none'
      const dayPicture=document.getElementById('#Day')
      dayPicture.style.display="block"
     }, 2000)
    }
)
sleepinessContainer.textContent=`Sleepiness score: ${tamagotchi.sleepiness}`
  console.log(tamagotchi.sleepiness)

//Name your cat
const button1=document.querySelector("#start")
const petNameContainer=document.getElementById("petNameContainer")
button1.addEventListener("click", function(){
    let petName=prompt("Pick the name of your pet")
if (petName !== ""){
     alert(`You've named your pet: ${petName}`)
     petNameContainer.textContent=`${petName}`
 } else {
    console.log(`You did't enter a name for your pet`)
 }})
// function increaseAge() {
//     tamagotchi.age+=2;
//     if (tamagotchi.age >10){
//         const displayElement = document.getElementById('eggDino');
//         displayElement.innerHTML = `Age: ${tamagotchi.age}`
//     }
//     else if (tamagotchi.age >20){
//         const displayElement = document.getElementById('adultDino');
//         displayElement.innerHTML = `Age: ${tamagotchi.age}`
//     }
//     else if (tamagotchi.age >50){
//         const displayElement = document.getElementById('oldDino');
//      displayElement.innerHTML = `Age: ${tamagotchi.age}`
//     }
//   }
// const ageInterval = setInterval(increaseAge, 5000); // Change the interval 


// }
// })


