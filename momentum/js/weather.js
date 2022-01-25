function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`You live in ${lat}, ${lng}`);
    api.openweathermap.org/data/2.5/weather?lat=38.1469&lon=128.2472&appid=7733420f0fe701f04a05f427d35ab20d
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);