<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TF2 Loadout Randomiser</title>
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<div class="center border">
    <div style="float: left">
        <h1>Loadout Randomiser!</h1>
        <div style="float: left">
            <img id="class" style="height: 500px" src="assets/classes/Scout.png">
            <p id="class-text">Scout</p>
        </div>
        <div style="float:left; width: 250px"></div>
        <div style="float: left">
            <img id="primary" style="height: 100px"
                 src="assets/weapons/Scattergun.png">
            <p id="primary-text">Scattergun</p>
            <img id="secondary" style="height: 100px"
                 src="assets/weapons/Pistol.png">
            <p id="secondary-text">Pistol</p>
            <img id="melee" style="height: 100px"
                 src="assets/weapons/Bat.png">
            <p id="melee-text">Bat</p>
            <img id="watch" style="height: 100px"
                 src="assets/weapons/Invis%20Watch.png">
            <p id="watch-text">Invis Watch</p>

        </div>
    </div>
    <br>
    <div style="float: left">
        <button id="randomiseButton" onclick="buttonClick()" onmouseover="randomiseButtonHover()"
                onmouseleave="randomiseButtonUnHover()">Randomise!
        </button>
    </div>
</div>


<script src="index.js"></script>
</body>
</html>

<?php

