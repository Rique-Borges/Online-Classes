function getBeer(){
    return document.getElementById("bottles").value;
}
function beerCounter(){
    let bottles = getBeer();
    let startingBottles = 0;
    let printer = "";
    while (bottles > 0) {
        if (bottles > 1) {
        printer += bottles + " bottles of beer on the wall, " + bottles + "  bottles of beer. <br> Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.";
        printer += "<br> <br>";
        document.getElementById("texter").innerHTML = printer;
        bottles--;
        startingBottles++;
        }else if (bottles == 1){
        printer += bottles + " bottle of beer on the wall, " + bottles + "  bottle of beer. <br> Take one down and pass it around, no more bottles of beer on the wall.";
        printer += "<br> <br>";
        document.getElementById("texter").innerHTML = printer;
        bottles--;
        startingBottles++;
        }    
    }
    printer +=  "No more bottles of beer on the wall, no more bottles of beer. <br> Go to the store and buy some more, " + startingBottles + " bottles of beer on the wall.";
    printer += "<br> <br>";
    document.getElementById("texter").innerHTML = printer;
} 