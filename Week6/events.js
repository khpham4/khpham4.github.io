
var num = 0;
var val = 0;
var snack = 0;
let welcomer = document.getElementById("welcome-text");
let pictureText = document.getElementById("picture-text");
let picture = document.querySelector(".image");
let activites = document.querySelector("#open");

document.getElementById("welcome-event").addEventListener("click", function (event) {
    num = Math.floor(Math.random() * 5);
    console.log(num);
    switch(num) {
        case 0:
            welcomer.innerHTML = "Do not gamble today..."
            welcomer.style.color = "var(--bad)";
            break;
        case 1:
            welcomer.innerHTML = "Your luck is bad."
            welcomer.style.color = "var(--bad)";
            break;
        case 2:
            welcomer.innerHTML = "Your luck is neutral."
            welcomer.style.color = "var(--blue)";
            break;
        case 3:
            welcomer.innerHTML = "You are lucky today!"
            welcomer.style.color = "var(--good)";
            break;
        case 4:
            welcomer.innerHTML = "Good fortune rains upon you!!!"
            welcomer.style.color = "var(--good)";
            break;
    }
});

document.getElementById("dark-mode").addEventListener("click", function (event) {
    console.log("screen event");
    document.body.classList.toggle('dark');
});

document.getElementById("activity-event").addEventListener("click", function (event) {
    console.log("showed/unshow event");
    if(activites.style.display == "block") {
        activites.style.display = "none";
    }
    else{
        activites.style.display = "block";
    }

});

document.getElementById("valorant").addEventListener("mouseover", function (event) {
    val = Math.floor(Math.random() * 9);
    console.log("hover (valorant event)");
    picture.style.display = "block"
    switch(val) {
        case 0:
            pictureText.innerHTML = "Chamber"
            picture.src="./assets/chamber.png"
            break;
        case 1:
            pictureText.innerHTML = "Clove"
            picture.src="./assets/clove.webp"
            break;
        case 2:
            pictureText.innerHTML = "Cypher"
            picture.src="./assets/cypher.webp"
            break;
        case 3:
            pictureText.innerHTML = "Jett"
            picture.src="./assets/jett.webp"
            break;
        case 4:
            pictureText.innerHTML = "KAY/O"
            picture.src="./assets/kayo.webp"
            break;
        case 5:
            pictureText.innerHTML = "Neon"
            picture.src="./assets/neon.png"
            break;
        case 6:
            pictureText.innerHTML = "Omen"
            picture.src="./assets/omen.webp"
            break;
        case 7:
            pictureText.innerHTML = "Skye"
            picture.src="./assets/skye.png"
            break;
        case 8:
            pictureText.innerHTML = "Tejo"
            picture.src="./assets/tejo.png"
            break;
        case 9:
            pictureText.innerHTML = "Yoru"
            picture.src="./assets/your.webp"
            break;
    }
});

document.getElementById("snack").addEventListener("mouseover", function (event) {
    snack = Math.floor(Math.random() * 4);
    console.log("hover (snack event)");
    picture.style.display = "block"
    switch(snack) {
        case 0:
            pictureText.innerHTML = "Cookies!"
            picture.src="./assets/cookies.jpg"
            break;
        case 1:
            pictureText.innerHTML = "Brownies!"
            picture.src="./assets/brownies.webp"
            break;
        case 2:
            pictureText.innerHTML = "Cupcakes!"
            picture.src="./assets/cupcake.jpg"
            break;
        case 3:
            pictureText.innerHTML = "SUGAR COOKIES!!"
            picture.src="./assets/sugar-cookie.jpg"
            break;
    }
});