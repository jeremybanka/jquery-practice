$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a heading.")
  })

  $("p").click(function() {
    alert("This is a paragraph.")
  })

  $("img").click(function() {
    alert("This is an image OF A WALRUS.")
  })
})

function fahrenheitToCelsius(fahr){
  const cel = (fahr - 32) * (5 / 9) 
  return cel
}

function celsiusToFahrenheit(cel){
  const fahr = (cel*9/5)+32
  return fahr
}

function convertTemperature() {
  const temperatureInput = prompt('Enter a temperature. Remember specify units!') // ##C ##F
  alert()
}

const celsiusResult = fahrenheitToCelsius(fahrenheitInput)
alert(celsiusResult)