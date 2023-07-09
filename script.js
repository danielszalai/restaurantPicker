var ettermek = new Array(
    "Laziza",
    "Gyros Brothers",
    "Crispy",
    "Calavera",
    "Tereza",
    "La Cabina",
    "Tuning Burger",
    "Úricipő Kaptafa",
    "Hai Nam Pho",
    "Pho36",
    "Flaska",
    "Input",
    "Kandalló",
    "Wafu",
    "Havanna Salsa Bar",
    "Pingrumba",
    "Vegan Love",
    "Arán Bakery",
    "Dolcissima",
    "Tepsis",
    "Balbek",
    "Ropogó (Múzeum körút)",
    "Oda (Czakó Kert)",

    );



function getRestaurant(){
var result = ettermek[Math.floor(Math.random()*ettermek.length)];

document.getElementById("etterem").innerHTML =
result;
document.getElementById("etterem").style.display = "block";
}