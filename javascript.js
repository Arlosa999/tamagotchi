class game{
    constructor(hunger, sleepness,
        biredom, age){
    this.hunger=hunger;
    this.sleepness=sleepness;
    this.boredom=boredom;
    this.age=age
        }
}
const button=document.querySelector("#start")
button.addEventListener("click", function(){
    let petName=prompt("Pick the name of your pet")
if (petName !== ""){
    alert(`You've named your pet: ${petName}`)
} else {
    console.log(`You did't enter a name for your pet`)
}
})


