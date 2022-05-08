const FetchCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  console.log(await response.json());
}

// FetchCountries();

const inpElement = document.getElementById('email-inp');

const verifyURL = "https://emailvalidation.abstractapi.com/v1/?api_key=e1cc21d8e4ff46dc8ef9a5f6a1005651&email="


const spanElement = document.createElement('span');
spanElement.style.color = "#fff";
spanElement.style.padding = "16px";
spanElement.style.margin = "16px";


const verifyEmail = async () => {
  const response = await fetch(`${verifyURL}${inpElement.value}`);
  const data = await response.json();

  spanElement.innerText = data.email;
  if(data.deliverability === "DELIVERABLE") {
    spanElement.classList.add('bg-success');
  } else {
    spanElement.classList.add('bg-danger');
  }
}

document.body.append(spanElement);


const weatherUrl =  "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "991f626650507e6605c2ca33f8edc191";

const getWeather = async () => {
  const weatherArea = document.getElementById("weather-area");

  try {
    const cityName = document.getElementById("text-inp").value;
    const response = await fetch(`${weatherUrl}?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    const main = data.main;

    const divElement = document.createElement('div');
    divElement.classList.add('weather-div');

    divElement.innerText = `Humidity - ${main.humidity}
      Temp Min - ${main.temp_min}
      Temp Max - ${main.temp_max}
      Feels Like - ${main.feels_like}
    `
    if (main.temp < 300 ) {
      divElement.classList.add('bg-success');
    } else if (main.temp >= 300 && main.temp < 310) {
      divElement.classList.add('bg-warning');
    } else divElement.classList.add('bg-danger');

    weatherArea.innerHTML = "";

    weatherArea.append(divElement);
  } catch (err) {
    spanElement.innerText = "Something Went Wrong";
    spanElement.classList.add('bg-danger');
    weatherArea.append(spanElement);
  }

}


// Immediately Invoked Functions Expression
(function () {
  console.log("I am IIFE")
})();
