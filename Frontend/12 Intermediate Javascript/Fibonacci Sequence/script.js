function fibonacciGenerator(n) {
  let fibonacciArray = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacciArray.push(i);
    } else if (i === 1) {
      fibonacciArray.push(1);
    } else {
      let nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      fibonacciArray.push(nextFibonacci);
    }
  }
  return fibonacciArray;
}
function getFibonacci() {
    let fibonacciNumber = document.getElementById('number').value;
    let printer = document.getElementById('texter');
    if (fibonacciNumber !== "") {
      let n = parseInt(fibonacciNumber);
      let fibonacciArray = fibonacciGenerator(n);
      printer.innerHTML = fibonacciArray.join(', ');
    } else {
      printer.innerHTML = "Please enter a valid number.";
    }
  }
  function lateralus() {
    var audio = new Audio("parabola.mp3");
    audio.play();
    document.body.style.backgroundImage = "url('toolbackground.gif')";
    document.body.style.color = "white";
  }
  
  document.querySelector("button").addEventListener('click', lateralus);
  