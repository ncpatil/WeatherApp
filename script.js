const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");
const curTemp = document.querySelector(".temp");
const curLocation = document.querySelector(".time_location p");
const curTime = document.querySelector(".time_location span");
const curCondition = document.querySelector(".weather_condition span");
const conditionIcon = document.querySelector("#pic");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchData(searchField.value);
});

function updateInfo(temp, location, timenDate, contn, iconUrl) {
  curTemp.innerText = temp + "°C";
  curLocation.innerText = location;
  curTime.innerText = timenDate;
  curCondition.innerText = contn;
  conditionIcon.src = iconUrl;
}

async function fetchData(target) {
  try {
    const respone = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=1461f63aefb54cd7a3e20450252409&q=${target}&aqi=no`
    );
    const data = await respone.json();
    console.log(data);

    let currentTemp = data.current.temp_c;
    let currentLocation = data.location.name;
    let currentTime = data.location.localtime;
    let curreentCondition = data.current.condition.text;
    let iconUrl = "https:" + data.current.condition.icon;

    updateInfo(
      currentTemp,
      currentLocation,
      currentTime,
      curreentCondition,
      iconUrl
    );
  } catch (error) {
    curLocation.innerText = "City not found ";
    curTemp.innerText = "--";
    curTime.innerText = "--";
    curCondition.innerText = "--";
    conditionIcon.src = "";
    console.error("cannot fetch", error);
  }
}

// default city on load
document.addEventListener("DOMContentLoaded", () => {
  fetchData("Bangalore");
});
