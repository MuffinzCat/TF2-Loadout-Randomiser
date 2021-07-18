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
    const audio = new Audio('assets/audio/buttonclick.mp3');
    audio.play();
}

function buttonClick() {
    buttonSound();
    fetch("itemList.json").then(response => response.text()).then(data => {
        const itemList = JSON.parse(data);

        const classImg = document.getElementById("class");
        const classTxt = document.getElementById("class-text");

        const primaryImg = document.getElementById("primary");
        const primaryTxt = document.getElementById("primary-text");

        const secondaryImg = document.getElementById("secondary");
        const secondaryTxt = document.getElementById("secondary-text");

        const meleeImg = document.getElementById("melee");
        const meleeTxt = document.getElementById("melee-text");

        let primary;
        let secondary;
        let melee;

        switch (rng(1, 10)) {
            case 1:
                //scout
                primary = itemList.scout.primary[rng(0, itemList.scout.primary.length)];
                secondary = itemList.scout.secondary[rng(0, itemList.scout.secondary.length)];
                melee = itemList.scout.melee[rng(0, itemList.scout.melee.length)];

                console.log("scout");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Scout.png";
                classTxt.innerHTML = "Scout";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 2:
                //soldier
                primary = itemList.soldier.primary[rng(0, itemList.soldier.primary.length)];
                secondary = itemList.soldier.secondary[rng(0, itemList.soldier.secondary.length)];
                melee = itemList.soldier.melee[rng(0, itemList.soldier.melee.length)];

                console.log("soldier");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Soldier.png";
                classTxt.innerHTML = "Soldier";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 3:
                //pyro
                primary = itemList.pyro.primary[rng(0, itemList.pyro.primary.length)];
                secondary = itemList.pyro.secondary[rng(0, itemList.pyro.secondary.length)];
                melee = itemList.pyro.melee[rng(0, itemList.pyro.melee.length)];

                console.log("pyro");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Pyro.png";
                classTxt.innerHTML = "Pyro";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 4:
                //demoman
                primary = itemList.demoman.primary[rng(0, itemList.demoman.primary.length)];
                secondary = itemList.demoman.secondary[rng(0, itemList.demoman.secondary.length)];
                melee = itemList.demoman.melee[rng(0, itemList.demoman.melee.length)];

                console.log("demoman");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Demoman.png";
                classTxt.innerHTML = "Demoman";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 5:
                //heavy
                primary = itemList.heavy.primary[rng(0, itemList.heavy.primary.length)];
                secondary = itemList.heavy.secondary[rng(0, itemList.heavy.secondary.length)];
                melee = itemList.heavy.melee[rng(0, itemList.heavy.melee.length)];

                console.log("heavy");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Heavy.png";
                classTxt.innerHTML = "Heavy";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 6:
                //engineer
                primary = itemList.engineer.primary[rng(0, itemList.engineer.primary.length)];
                secondary = itemList.engineer.secondary[rng(0, itemList.engineer.secondary.length)];
                melee = itemList.engineer.melee[rng(0, itemList.engineer.melee.length)];

                console.log("engineer");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Engineer.png";
                classTxt.innerHTML = "Engineer";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 7:
                //medic
                primary = itemList.medic.primary[rng(0, itemList.medic.primary.length)];
                secondary = itemList.medic.secondary[rng(0, itemList.medic.secondary.length)];
                melee = itemList.medic.melee[rng(0, itemList.medic.melee.length)];

                console.log("medic");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Medic.png";
                classTxt.innerHTML = "Medic";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 8:
                //sniper
                primary = itemList.sniper.primary[rng(0, itemList.sniper.primary.length)];
                secondary = itemList.sniper.secondary[rng(0, itemList.sniper.secondary.length)];
                melee = itemList.sniper.melee[rng(0, itemList.sniper.melee.length)];

                console.log("sniper");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Sniper.png";
                classTxt.innerHTML = "Sniper";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(false);
                break
            case 9:
                //spy
                primary = itemList.spy.primary[rng(0, itemList.spy.primary.length)];
                secondary = itemList.spy.secondary[rng(0, itemList.spy.secondary.length)];
                melee = itemList.spy.melee[rng(0, itemList.spy.melee.length)];

                console.log("spy");
                console.log(primary);
                console.log(secondary);
                console.log(melee);

                classImg.src = "assets/classes/Spy.png";
                classTxt.innerHTML = "Spy";

                primaryImg.src = "assets/weapons/" + primary + ".png";
                primaryTxt.innerHTML = primary;

                secondaryImg.src = "assets/weapons/" + secondary + ".png";
                secondaryTxt.innerHTML = secondary;

                meleeImg.src = "assets/weapons/" + melee + ".png";
                meleeTxt.innerHTML = melee;
                cloak(true);
                break
        }

    });
}

function cloak(on) {
    var x = document.getElementById("watch");
    var y = document.getElementById("watch-text");
    if (on) {
        x.style.display = "block"
        y.style.display = "block"
    } else {
        x.style.display = "none"
        y.style.display = "none"
    }
}