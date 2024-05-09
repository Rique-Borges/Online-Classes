function fuzzBuzz(i) {
  let result = "";
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      result += "FuzzBuzz";
    } else {
      result += "Fuzz";
    }
  } else if (i % 5 === 0) {
    result += "Buzz";
  } else {
    result += i;
  }
  return result;
}

function count() {
  let printer = "";
  for (i = 1; i <= 100; i++) {
    if (i % 20 === 0) {
      printer += fuzzBuzz(i) + "<br>";
    } else {
      printer += fuzzBuzz(i) + " ,";
    }
  }
  document.getElementById("texter").innerHTML = printer;
}

count();
