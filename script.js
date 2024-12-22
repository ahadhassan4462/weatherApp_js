let weatherInput = document.querySelector("#weatherInput");
let weatherBtn = document.querySelector("#weatherBtn");
let weatherUpdate = document.querySelector("#weatherUpdate");

let dgree = document.querySelector("#dgree");
let wind = document.querySelector("#wind");
let Pressure = document.querySelector("#Pressure");
let Humidity = document.querySelector("#Humidity");
let weatherCity = document.querySelector("#weatherCity");
let loading = document.querySelector("#loading");
let worningIcon = document.querySelector("#worningIcon");

const apiKey = "216ae54bafcdf9c0bc96a98328907424";

const weatherBox = async (city) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const weatherData = await fetch(url);
    const FinalData = await weatherData.json();
    if (FinalData) {
      return FinalData;
    }
  } catch (error) {
    console.log("Failed!", error);
  }
};
weatherBtn.addEventListener("click", async function () {
  let data = await weatherBox(weatherInput.value);

  if (data.cod === 200) {
    weatherUpdate.classList.remove("d-none");
    wind.innerHTML = `${data.wind.speed} m/s`;
    Humidity.innerHTML = `${data.main.humidity} %`;
    Pressure.innerHTML = `${data.main.pressure} hPa`;
    dgree.innerHTML = `${Math.round(data.main.temp)} °C`;
    weatherCity.innerHTML = `${data.name}, PK`;
    
    loading.classList.add("d-none");
    worning.classList.add("d-none");
  } else {
    weatherUpdate.classList.add("d-none");
    loading.classList.add("d-none");
    worning.innerHTML = "";
    worning.classList.remove("d-none");
    worning.innerHTML = "no data!";
     worning.style.color="red"
     worning.style.marginTop="10px"
  }
 
});
weatherBtn.addEventListener("click", function () {
  loading.classList.remove("d-none");

});
