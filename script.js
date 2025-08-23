// get the convertion btn
let convertBtn = document.getElementById("convertion-btn")


let meterFeetEl = document.getElementById("meter-feet")
let kiloPoundEl = document.getElementById("kilo-pound")
let literGallon = document.getElementById("liter-gallon")


// get user input tag
let userInputTag = document.getElementById("unit-box")



// add event listener to convertion btn
convertBtn.addEventListener("click", ()=>{
    renderFeetAndMeter()
    renderKilogramAndPound()
    renderLiterAndGallon()
})

function renderFeetAndMeter(){
let userInput = userInputTag.value
    // convert meter to feet
   let feet =  (Number(userInput) *  3.281).toFixed(3)
   // convert feet to  meter
   let meter = (Number(userInput) / 3.281).toFixed(3)
//   let result = 20 meters = 65.616 feet | 20 feet = 6.096 meters
  let result = `${userInput} meters = ${feet} feet | ${userInput} feet = ${meter} meters`
  meterFeetEl.textContent = result
}

function renderLiterAndGallon(){
    let userInput = userInputTag.value
    //convert liters to gallon 
    let gallons = (Number(userInput)* 0.264).toFixed(3)
    //convert gallons to liters
    let liters = (Number(userInput) / 0.264).toFixed(3)
    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    let result = `${userInput} liters = ${gallons} gallons | ${userInput} gallons = ${liters} liters`
    literGallon.textContent = result
}


function renderKilogramAndPound(){
    let userInput = userInputTag.value
    //convert kilograms to Pounds
    let Pounds = (Number(userInput) * 2.204).toFixed(3)
    //convert Pounds to kilogram
    let Kilogram = (Number(userInput) / 2.204).toFixed(3)
    // let result = '20 liters = 5.284 gallons | 20 gallons = 75.708 liters'
    let result = `${userInput} kilos = ${Pounds} pounds | ${userInput} pounds = ${Kilogram} kilos`
    kiloPoundEl.textContent = result
}