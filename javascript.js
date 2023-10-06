class Tamagotchi
{
    static DEFAULT_INCREMENT__HUNGER = 2;
    static DEFAULT_INCREMENT__SLEEPINESS = 3;
    static DEFAULT_INCREMENT__BOREDOM = 2;
    static DEFAULT_DELAY_MS__LIVE = 5000;

    constructor(
        name = "Thor",
        age = 1,
        hunger = 5,
        sleepiness= 5,
        boredom = 2
    ) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;

        this.timer = setInterval(this.live.bind(this), Tamagotchi.DEFAULT_DELAY_MS__LIVE);

        console.log(`${this.name} was just born!`);
    }

     live() {
        this.age++;
        this.hunger += Tamagotchi.DEFAULT_INCREMENT__HUNGER;
        this.sleepiness += Tamagotchi.DEFAULT_INCREMENT__SLEEPINESS;
        this.boredom += Tamagotchi.DEFAULT_INCREMENT__BOREDOM;

        console.log(`${this.name} may be alive :)`)
        console.log(this.status());
    }

    eat() {
        this.hunger--;
        console.log(this.status());
    }

    sleep() {
        this.sleepiness--;
        console.log(this.status());
    }

    play() {
        this.boredom--;
        console.log(this.status());
    }

    isAlive() {
        if (
            this.hunger===10 ||
            tamagotchi.sleepiness===10 ||
            tamagotchi.boredom===10 ||
            tamagotchi.age===50
        ){
            console.log(this.status());
            alert(`Game is over`);
        }

    }

    status() {
        return `Age: ${this.age}, Hunger:${this.hunger}, Sleepiness: ${this.sleepiness}, Boredom: ${this.boredom}`;
    }
}

class ControlScreen
{
    static DEFAULT_DELAY_MS__UPDATE_VIEW = 1000;

    constructor(tamagotchi) {
        this.tamagotchi = tamagotchi;

        this.blackscreen = document.getElementById("blackscreen");
        this.ageContainer = document.getElementById("ageContainer");
        this.petNameContainer = document.getElementById("petNameContainer");
        this.hungerContainer = document.getElementById("hungerContainer");
        this.sleepinessContainer = document.getElementById("sleepinessContainer");
        this.boredomContainer = document.getElementById("boredomContainer");

        this.buttonFeedMe = document.querySelector("#feedMe");
        this.buttonFeedMe.addEventListener("click", this.feedTamagotchi.bind(this));

        this.buttonPlay = document.querySelector("#playWithMe");
        this.buttonPlay.addEventListener("click", this.playWithTamagotchi.bind(this));

        this.buttonSleep = document.querySelector("#putMeToSleep");
        this.buttonSleep.addEventListener("click", this.putToSleep.bind(this));

        this.buttonTurnOffLights = document.querySelector("#turnLights");
        this.buttonTurnOffLights.addEventListener("click", this.turnOffLights.bind(this));

        this.buttonStart = document.querySelector("#start");
        this.buttonStart.addEventListener("click", this.startGame.bind(this));

        this.timer = setInterval(this.displayValues.bind(this), ControlScreen.DEFAULT_DELAY_MS__UPDATE_VIEW);
    }

    startGame() {
        let petName = prompt("Pick the name of your pet");

        if (petName !== ""){
            this.tamagotchi = new Tamagotchi(petName);
            this.petNameContainer.textContent=`My pet name is: ${petName}`;
            alert(`You've named your pet: ${this.tamagotchi.name}`)
        } else {
            console.log(`You didn't enter a name for your pet`);
        }
    }

    feedTamagotchi() {
        this.tamagotchi.eat();
        this.displayValues();
    }

    playWithTamagotchi() {
        this.tamagotchi.play();
        this.displayValues();
    }

    putToSleep() {
        this.tamagotchi.sleep();
        this.displayValues();
    }

    turnOffLights() {
        const that = this;
        blackscreen.style.display = "block";
        setTimeout(
            () => {
                blackscreen.style.display = "none";
                that.displayValues();
            },
            2000
        );
        this.displayValues();
    }

    displayValues() {
        if (this.tamagotchi == undefined) {
            return;
        }

        this.ageContainer.textContent = `Age: ${this.tamagotchi.age}`;
        this.hungerContainer.textContent = `Hunger score: ${this.tamagotchi.hunger}`;
        this.boredomContainer.textContent = `Boredom score: ${this.tamagotchi.boredom}`;
        this.sleepinessContainer.textContent = `Sleepiness score: ${this.tamagotchi.sleepiness}`;
    }
}

const controlScreen = new ControlScreen();
