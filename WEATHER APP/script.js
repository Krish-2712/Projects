// Fetching the API

const key = "d3b87d533c991336e8512e084f51cb04";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search = document.querySelector(".first input");
const searchbtn = document.querySelector(".first button");
const image = document.querySelector(".main img")

// async function to load the data
async function Weather(city){
    const res = await fetch(url+ city +`&appid=${key}`);

    // used if - else to capture the error of wrong city name
    if(res.status == 404){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".container").style.display = "none";
    }
    else{
        document.querySelector(".err").style.display = "none";

    
    var data = await res.json();
    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "*C";
document.querySelector(".hum2").innerHTML = data.main.humidity + "%";
document.querySelector(".wind2").innerHTML = data.wind.speed + "km/h";
document.querySelector(".container").style.display = "flex";


// this if - else block is used to change the image icons according to the weather
if (data.weather[0].main == "Clouds"){
    image.src = "http://clipartmag.com/images/cloud-icon-png-27.jpg"
}
else if (data.weather[0].main == "Clear"){
    image.src = "https://cdn-icons-png.flaticon.com/512/7865/7865939.png"
}
else if (data.weather[0].main == "Rain"){
    image.src = "https://static.vecteezy.com/system/resources/previews/000/450/651/original/rain-vector-icon.jpg"
}
else if (data.weather[0].main == "Drizzle"){
    image.src = "https://static.vecteezy.com/system/resources/previews/007/244/582/original/drizzle-icon-style-vector.jpg"
}
else if (data.weather[0].main == "Mist"){
    image.src = "https://cdn3.iconfinder.com/data/icons/weather-and-meteorology-4/85/weather_fog_foggy_mist-1024.png"
}
else if(data.weather[0].main == "Smoke"){
    image.src = "https://cdn3.vectorstock.com/i/1000x1000/16/72/smoke-icon-fog-design-graphic-vector-9591672.jpg"
}
else if(data.weather[0].main == "Fog"){
    image.src = "http://icons.iconarchive.com/icons/custom-icon-design/weather/256/fog-icon.png"
}

}
}

// button to enter the name of city and to display the weather of the respective city
searchbtn.addEventListener("click",()=>{
    Weather(search.value)
})

