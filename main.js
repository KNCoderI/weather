const input = document.getElementById("city");
const submit = document.getElementById("submit");

let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}, ru&appid=d202d38f2043c32d8e01b7025e69b56f`;

function fc(f)  {
    var fTemp = f;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    return message;
} 

submit.addEventListener("click", (e) => {
    const info = document.getElementById("info");

    fetch(url)
    .then(r => r.json())
    .then(data => {
        info.innerText = data.main.temp;
        console.log(data);
    })
    
})