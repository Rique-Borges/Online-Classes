function amorVerdadeiro() {
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var resultadoElement = document.getElementById("resultado");

    if (
      (nome1 === "Henrique" || nome1 === "Alan") &&
      (nome2 === "Henrique" || nome2 === "Alan")
    ) {
      resultadoElement.innerHTML = "100%";
    } else if
      ((nome1 === "vc falou de programadores") && (nome2 === "q amam fazer calculadoras"))
     {
      resultadoElement.innerHTML = "VAMO IR NO MAVS AMANHÃ? O ALAN TA MT ON PRA IR";
    } else {
      var resultado = Math.floor(Math.random() * 101);
      resultadoElement.innerHTML = resultado + "%";
    }
  }