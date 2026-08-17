let city = "Moscow";
let temperature = 20;
  console.log(`В городе ${city} сейчас ${temperature} градусов по цельсию.`);


const lightSpeed = 299792458; 

function checkLightSpeed(speed) {
  console.log(typeof speed)
    if (!typeof speed === "number") {
      console.log("напиши число")
      return
    }

 if (lightSpeed < speed) {
  console.log('Сверхсветовая скорость')
} else if (lightSpeed > speed) {
  console.log('Субсветовая скорость')
} else if (speed === lightSpeed) { 
  console.log('Скорость света')
}
  else {console.log("напиши число")}
}

checkLightSpeed(299792458);

let carPrice = 1000
function buyCar (budget) {
  if (budget >= carPrice) {
    console.log("Товар куплен")
  } else { 
    const need = carPrice - budget;
    console.log(`Товар не куплен, не хватает ${need}`)
  }
}
buyCar(1000)