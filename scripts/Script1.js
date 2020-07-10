const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=0a7bca7823a59b236dd203e74eabc25c";

function performAction() {
    var city = document.getElementById('city').value;
    var url = baseURL + city + apiKey;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('tempValue').innerHTML = data['main']['temp'];
            document.getElementById('tempDesc').innerHTML = data['weather'][0]['description'];
            document.getElementById('locate').innerHTML = data['name'];
        })
        .catch(err => console.log(err))
}