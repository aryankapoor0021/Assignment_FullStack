const form=document.querySelector('form');
const button=document.querySelector('button');
const key="4fe70d124f627574cebca9c7813cf189";
let first=true;
function showTime(){
    var date = new Date();
    var options={
    weekday:"long",
    day:"numeric",
    month:"long",
    }
    var time=date.toLocaleTimeString();
    var day=date.toLocaleDateString("en-IN",options);
    var today=date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
    document.getElementById("date").innerText=day;
    document.getElementById("time").innerText=time;
    setTimeout(showTime, 1000);
    if(first==true)
    {
     document.body.style.backgroundImage= "url(https://images.unsplash.com/photo-1561471026-0bbb77535d25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGxlYXNlbnQlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment ='fixed';
    document.body.style.backgroundSize = 'cover';
    }
    first=false;
} 
function backgroundChange(weatherinfo) {
  if (weatherinfo.includes("clouds")) {
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment ='fixed';
  document.body.style.backgroundSize = 'cover';
  } else if (weatherinfo.includes("haze")) {
  document.body.style.backgroundImage = "url(https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF6ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment ='fixed';
  document.body.style.backgroundSize = 'cover';
  } else if (weatherinfo.includes("clear")) {
  document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1546440730-4716c1a47815?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment ='fixed';
  document.body.style.backgroundSize = 'cover';
  } else if(weatherinfo.includes("rain")){
  document.body.style.backgroundImage= "url(https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment ='fixed';
  document.body.style.backgroundSize = 'cover';
  }
  else if(weatherinfo.includes("snow")){
  document.body.style.backgroundImage= "url(https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment ='fixed';
  document.body.style.backgroundSize = 'cover';
  }
   else {
  document.body.style.backgroundImage= "url(https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60)";
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment ='fixed';
  document.body.style.backgroundSize = 'cover';
  }
}
function display(data)
{
    console.log(data);
    const temp=data.main.temp;
    const humidity=data.main.humidity;
    const temp_max=data.main.temp_max;
    const temp_min=data.main.temp_min;
    const  detail=data.weather[0].description;
    backgroundChange(detail);
    const windspeed=data.wind.speed;
    const winddir=data.wind.deg;
    const pressure=data.main.pressure;
    const feels_like=data.main.feels_like;
    document.getElementById('temp').innerText=temp+" °C";
    document.getElementById('tempdet').innerText=detail;
    document.getElementById('mintemp').innerText=temp_min+" °C";
    document.getElementById('maxtemp').innerText=temp_max+" °C";
    document.getElementById('feels_like').innerText=feels_like+" °C";
    document.getElementById("pres").innerText=pressure+" Pa";
    document.getElementById("humid").innerText=humidity+"%";
    document.getElementById("speed").innerText=windspeed+" m/s";
}
function getWeather(city)
{
    const unit='metric';
    let url="https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=" +key + "&units="+unit;
    fetch(url)
    .then(function(res){
        return res.json()})
    .then(function(data){
        display(data);
    })
    .catch(function(err){
        console.log(err);
    });
}
form.addEventListener('submit',(e) => {
    e.preventDefault();

    const city=form.elements[0].value;
    const citytext=document.getElementById('city');
    getWeather(city);
    citytext.innerText=city;
    form.elements[0].value="";
})
button.addEventListener('click',(e) => {
    e.preventDefault();

    const city=form.elements[0].value;
    const citytext=document.getElementById('city');
    getWeather(city);
    citytext.innerText=city;
    form.elements[0].value="";
})
showTime();