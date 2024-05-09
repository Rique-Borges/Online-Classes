document.querySelector("ul").lastElementChild.innerHTML = "terceiro";
document.querySelector("input").click();
document.querySelector("button").style.backgroundColor= "yellow";
document.querySelector("li a").style.color = "red";
function huge(){
    document.querySelector("h1").classList.add("huge");
    document.querySelector("h1").innerHTML = "GET OUT GET OUT NOW WHY ARE YOU HERE";
    }
document.querySelector("button").addEventListener("click",huge);