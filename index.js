function randomiseButtonHover() {
    document.getElementById("randomiseButton").className = "buttonHover";
}

function randomiseButtonUnHover() {
    document.getElementById("randomiseButton").className = "";
}

function rng(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function buttonSound() {
    const audio = new Audio('buttonclick.mp3');
    audio.play();
}

function buttonClick() {
    buttonSound();
    fetch("itemList.json").then(response => response.text()).then(data => {
        const itemList = JSON.parse(data);
        switch (rng(1, 10)) {
            case 1:
                //scout
                console.log("scout");
                console.log(itemList.scout.primary[rng(0, itemList.scout.primary.length)]);
                console.log(itemList.scout.secondary[rng(0, itemList.scout.secondary.length)]);
                console.log(itemList.scout.melee[rng(0, itemList.scout.melee.length)]);
                break
            case 2:
                //soldier
                console.log("soldier");
                console.log(itemList.soldier.primary[rng(0, itemList.soldier.primary.length)]);
                console.log(itemList.soldier.secondary[rng(0, itemList.soldier.secondary.length)]);
                console.log(itemList.soldier.melee[rng(0, itemList.soldier.melee.length)]);
                break
            case 3:
                //pyro
                console.log("pyro");
                console.log(itemList.pyro.primary[rng(0, itemList.pyro.primary.length)]);
                console.log(itemList.pyro.secondary[rng(0, itemList.pyro.secondary.length)]);
                console.log(itemList.pyro.melee[rng(0, itemList.pyro.melee.length)]);
                break
            case 4:
                //demoman
                console.log("demoman");
                console.log(itemList.demoman.primary[rng(0, itemList.demoman.primary.length)]);
                console.log(itemList.demoman.secondary[rng(0, itemList.demoman.secondary.length)]);
                console.log(itemList.demoman.melee[rng(0, itemList.demoman.melee.length)]);
                break
            case 5:
                //heavy
                console.log("heavy");
                console.log(itemList.heavy.primary[rng(0, itemList.heavy.primary.length)]);
                console.log(itemList.heavy.secondary[rng(0, itemList.heavy.secondary.length)]);
                console.log(itemList.heavy.melee[rng(0, itemList.heavy.melee.length)]);
                break
            case 6:
                //engineer
                console.log("engineer");
                console.log(itemList.engineer.primary[rng(0, itemList.engineer.primary.length)]);
                console.log(itemList.engineer.secondary[rng(0, itemList.engineer.secondary.length)]);
                console.log(itemList.engineer.melee[rng(0, itemList.engineer.melee.length)]);
                break
            case 7:
                //medic
                console.log("medic");
                console.log(itemList.medic.primary[rng(0, itemList.medic.primary.length)]);
                console.log(itemList.medic.secondary[rng(0, itemList.medic.secondary.length)]);
                console.log(itemList.medic.melee[rng(0, itemList.medic.melee.length)]);
                break
            case 8:
                //sniper
                console.log("sniper");
                console.log(itemList.sniper.primary[rng(0, itemList.sniper.primary.length)]);
                console.log(itemList.sniper.secondary[rng(0, itemList.sniper.secondary.length)]);
                console.log(itemList.sniper.melee[rng(0, itemList.sniper.melee.length)]);
                break
            case 9:
                //spy
                console.log("spy");
                console.log(itemList.spy.primary[rng(0, itemList.spy.primary.length)]);
                console.log(itemList.spy.secondary[rng(0, itemList.spy.secondary.length)]);
                console.log(itemList.spy.melee[rng(0, itemList.spy.melee.length)]);
                break
        }

    });
}