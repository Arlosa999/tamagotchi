// Create tamagotchi object & create metrics 
const tamagotchi={
    age: 0,
    hunger: 5,
    sleepiness: 5,
    boredom: 5
}
//increase hunger/sleepiness/boredrom--- 
function increaseMetrics(){
  tamagotchi.hunger+=2
  tamagotchi.sleepiness+=2
  tamagotchi.boredom+=2
  console.log=(`Hunger:${tamagotchi.hunger}, Sleepiness: ${tamagotchi.sleepiness}, Boredom: ${tamagotchi.boredom} `)}
  const metricsInterval = setInterval(increaseMetrics, 1000);
increaseMetrics()


//feed the pet
const button2=document.querySelector("#feedMe")
const hungerContainer=document.getElementById("hungerContainer") //here I access to the feedme botton 
button2.addEventListener("click", function(){ // access the function when i click on the button 
  // if (tamagotchi.hunger>0){
    tamagotchi.hunger--
    if (tamagotchi.sleepiness>=10){
      die()
    }
  hungerContainer.textContent=`Hunger score: ${tamagotchi.hunger}`
  console.log(tamagotchi.hunger)   
})

// play with your pet 
const button3=document.querySelector("#playWithMe") //here I access to the feedme botton 
const boredomContainer=document.getElementById("boredomContainer") //here I access to the feedme botton 
button3.addEventListener("click", function(){ // access the function when i click on the button 
  // if (tamagotchi.boredom>0){
  tamagotchi.boredom-=1 
  if (tamagotchi.sleepiness>=10){
    die()
  }
  // }
  boredomContainer.textContent=`Boredom score: ${tamagotchi.boredom}`
  console.log(tamagotchi.boredom)  // 
})

// turn on and turn off the light - I need to add change image to day and night picture //doesnt work // put me to sleep doesnt work 
const button5=document.querySelector("#turnLights")
const blackscreen=document.getElementById("blackscreen")
button5.addEventListener("click", function(){
//  if (blackscreen.style.display==="block"){
  blackscreen.style.display="block"
//  }
 setTimeout(()=>{blackscreen.style.display = "none"}, 2000)

 //  else{
//   blackscreen.style.display="block"
//  }
})

// button5.addEventListener("mouseout", function(){
//   blackscreen.style.display="none"
// })

//put pet to sleep 
const button4=document.querySelector("#putMeToSleep")
const sleepinessContainer=document.getElementById("sleepinessContainer") 
button4.addEventListener("click", function(){ 
  // if (tamagotchi.hunger>0){
    tamagotchi.sleepiness--
  // }
  if (tamagotchi.sleepiness>=10){
    die()
  }
  sleepinessContainer.textContent=`Sleepness score: ${tamagotchi.sleepiness}`
  console.log(tamagotchi.sleepiness)   
})
// let index=0

//put tamagotchi to sleep 
// const botton4= document.addEventListener(#
//   tamagotchi.sleepiness-=1
//   sleepinessContainer.textContent=`Sleepness score: ${tamagotchi.sleepiness}`
//   console.log(tamagotchi.sleepiness)
// })
  // function change(){
  //  const pictures =document.getElementById("#switch")
  // }for (let i=0; i<pictures.length; i++){
  //   pictures[i].style.display="none"
  // }
  // index++
  // if (index>=pictures.length){
  //   index=0
  // }
  // pictures[index].style.display="block"
  //   setTimeout(function(){
  //     pictures[index].style.display='none'
  //     const dayPicture=document.getElementById('#Day')
  //     dayPicture.style.display="block"
  //    }, 2000)
  //   }
// )
//display values in real time 
  function displayValues(){ // include it for every function 
    hungerContainer.textContent=`Hunger score: ${tamagotchi.hunger}`
    boredomContainer.textContent=`Boredom score: ${tamagotchi.boredom}`
    sleepinessContainer.textContent=`Sleepiness score: ${tamagotchi.sleepiness}`

  }
//Name your pet
const button1=document.querySelector("#start")
const petNameContainer=document.getElementById("petNameContainer")
button1.addEventListener("click", function(){
    let petName=prompt("Pick the name of your pet")
if (petName !== ""){
     alert(`You've named your pet: ${petName}`)
     petNameContainer.textContent=`My pet name is: ${petName}`
 } else {
    console.log(`You did't enter a name for your pet`)
 }})
 
 //Increase age 
function increaseAge() {
    ageContainer.textContent=`My pet age is: ${tamagotchi.age}`
    tamagotchi.age+=5;
    if( tamagotchi.age>=50){
      die()
    }
  }
  const ageInterval = setInterval(increaseAge, 2000);
    // if (tamagotchi.age >10){
    //     const displayElement = document.getElementById('eggDino');
    //     displayElement.innerHTML = `Age: ${tamagotchi.age}`
    // }
    // else if (tamagotchi.age >20){
    //     const displayElement = document.getElementById('adultDino');
    //     displayElement.innerHTML = `Age: ${tamagotchi.age}`
    // }
    // else if (tamagotchi.age >50){
    //     const displayElement = document.getElementById('oldDino');
    //  displayElement.innerHTML = `Age: ${tamagotchi.age}`
    // }
    // else {
    //   document.getElementById('eggDino').innerHTML = '';
    //   document.getElementById('adultDino').innerHTML = '';
      // If you have more age elements, add them here
  
  // }
// increase Hunger, Sleepiness, Bored metrics -  problem it updates on the back end but not on the front end 
  //die 
  function die(){
    if (tamagotchi.hunger===10 || tamagotchi.sleepiness===10 || tamagotchi.boredom===10 || tamagotchi.age===50){
    alert(`Game is over`)}
    tamagotchi.hunger=0
    tamagotchi.age=0
    tamagotchi.sleepiness=0
    tamagotchi.boredom=0
  }