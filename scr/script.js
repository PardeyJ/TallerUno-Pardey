let bullets = document.querySelectorAll(".bullet");
let generator = document.querySelector(".cocktailgenerator")
let nombre = document.querySelector(".Name");
console.log(bullets)

for (let index = 0; index < bullets.length; index++) {

    bullets[index].addEventListener("click", function () {



        switch (index) {

            case 0:
                generator.style.backgroundImage = 'url("./../data/mojito1.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Frambuesa"
                }, 1000)

                break;
            case 1:
                generator.style.backgroundImage = 'url("./../data/mojito2.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Limón"
                }, 1000)
                break;
            case 2:
                generator.style.backgroundImage = 'url("./../data/mojito3.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Mora Azul"
                }, 1000)
                break;
            case 3:
                generator.style.backgroundImage = 'url("./../data/mojito4.png")';
                nombre.style.opacity = "0"
                setTimeout(function () {
                    nombre.style.opacity = "1"
                    nombre.innerHTML = "Naranja"
                }, 600)
                break;


        }
    })


}