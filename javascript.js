var nome = "Rafael"

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQaurtoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQaurtoBimestre) / 4

// o códico abaixo serve para que na hora do calculo só aparecer um numero depois da virgula
var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log(notaFinal)