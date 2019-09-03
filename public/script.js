//************************************************************************************************/
//--------------------------------------- HTML Variables ---------------------------------------
//************************************************************************************************/

//----------------- Icons
const icon = new Skycons({color: 'white'})
// icon.set('currentConditionsIcon', 'clear-day')
// icon.set('hour1Icon','clear-day')
// icon.set('hour2Icon','clear-day')
// icon.set('hour3Icon','clear-day')
// icon.set('hour4Icon','clear-day')
// icon.set('hour5Icon','clear-day')
// icon.set('hour6Icon','clear-day')
// icon.set('hour7Icon','clear-day')
// icon.play()

//----------------- Time and Date
timeCardTimeVal = document.querySelector('[timeCardTimeVal]')
timeCardAMPM = document.querySelector('[timeCardAMPM]')
timeCardDay = document.querySelector('[timeCardDay]')
timeCardMonth = document.querySelector('[timeCardMonth]')
timeCardDate = document.querySelector('[timeCardDate]')
timeCardYear = document.querySelector('[timeCardYear]')

//----------------- Current Conditions
currentConditionsTempVal = document.querySelector('[currentConditionsTempVal]')
currentConditionsWindVal = document.querySelector('[currentConditionsWindVal]')
currentConditionsRainVal = document.querySelector('[currentConditionsRainVal]')

//----------------- Hourly Conditions
hour1 = document.querySelector('[hour1]')
hour2 = document.querySelector('[hour2]')
hour3 = document.querySelector('[hour3]')
hour4 = document.querySelector('[hour4]')
hour5 = document.querySelector('[hour5]')
hour6 = document.querySelector('[hour6]')
hour7 = document.querySelector('[hour7]')
hour1VAL = document.querySelector('[hour1VAL]')
hour2VAL = document.querySelector('[hour2VAL]')
hour3VAL = document.querySelector('[hour3VAL]')
hour4VAL = document.querySelector('[hour4VAL]')
hour5VAL = document.querySelector('[hour5VAL]')
hour6VAL = document.querySelector('[hour6VAL]')
hour7VAL = document.querySelector('[hour7VAL]')
hour1RainVal = document.querySelector('[hour1RainVal]')
hour2RainVal = document.querySelector('[hour2RainVal]')
hour3RainVal = document.querySelector('[hour3RainVal]')
hour4RainVal = document.querySelector('[hour4RainVal]')
hour5RainVal = document.querySelector('[hour5RainVal]')
hour6RainVal = document.querySelector('[hour6RainVal]')
hour7RainVal = document.querySelector('[hour7RainVal]')

//----------------- Weekly Conditions
dayName1 = document.querySelectorAll('[dayName1]')
dayName2 = document.querySelectorAll('[dayName2]')
dayName3 = document.querySelectorAll('[dayName3]')
dayName4 = document.querySelectorAll('[dayName4]')
dayName5 = document.querySelectorAll('[dayName5]')
dayName6 = document.querySelectorAll('[dayName6]')
dayName7 = document.querySelectorAll('[dayName7]')
day1High = document.querySelector('[day1High]')
day2High = document.querySelector('[day2High]')
day3High = document.querySelector('[day3High]')
day4High = document.querySelector('[day4High]')
day5High = document.querySelector('[day5High]')
day6High = document.querySelector('[day6High]')
day7High = document.querySelector('[day7High]')
day1Low = document.querySelector('[day1Low]')
day2Low = document.querySelector('[day2Low]')
day3Low = document.querySelector('[day3Low]')
day4Low = document.querySelector('[day4Low]')
day5Low = document.querySelector('[day5Low]')
day6Low = document.querySelector('[day6Low]')
day7Low = document.querySelector('[day7Low]')
day1RainVal = document.querySelector('[day1RainVal]')
day2RainVal = document.querySelector('[day2RainVal]')
day3RainVal = document.querySelector('[day3RainVal]')
day4RainVal = document.querySelector('[day4RainVal]')
day5RainVal = document.querySelector('[day5RainVal]')
day6RainVal = document.querySelector('[day6RainVal]')
day7RainVal = document.querySelector('[day7RainVal]')

//----------------- News
newsBoxImg1 = document.querySelector('[newsBoxImg1]')
newsBoxImg2 = document.querySelector('[newsBoxImg2]')
newsBoxImg3 = document.querySelector('[newsBoxImg3]')
newsBoxHeadline1 = document.querySelector('[newsBoxHeadline1]')
newsBoxHeadline2 = document.querySelector('[newsBoxHeadline2]')
newsBoxHeadline3 = document.querySelector('[newsBoxHeadline3]')
newsBoxArticle1 = document.querySelector('[newsBoxArticle1]')
newsBoxArticle2 = document.querySelector('[newsBoxArticle2]')
newsBoxArticle3 = document.querySelector('[newsBoxArticle3]')
newsBoxSource1 = document.querySelector('[newsBoxSource1]')
newsBoxSource2 = document.querySelector('[newsBoxSource2]')
newsBoxSource3 = document.querySelector('[newsBoxSource3]')

//************************************************************************************************/
//--------------------------------------- Functions ---------------------------------------
//************************************************************************************************/

//-----------------------------------------------------------------------------------
//----------------- Switch screens //-----------------
//-----------------------------------------------------------------------------------
function showCurrentWeather(){
    document.getElementById("locationSearchContainer").className = "classHide";
    document.getElementById("currentWeatherContainer").className = "classShow";
    document.getElementById("hourlyConditionsContainer").className = "classHide";    
    document.getElementById("weeklyConditionsContainer").className = "classHide";    
    document.getElementById("newsContainer").className = "classHide";    
}
function showHourlyWeather(){
    document.getElementById("locationSearchContainer").className = "classHide";
    document.getElementById("currentWeatherContainer").className = "classHide";
    document.getElementById("hourlyConditionsContainer").className = "classShow";    
    document.getElementById("weeklyConditionsContainer").className = "classHide";    
    document.getElementById("newsContainer").className = "classHide";    
}
function showWeeklyWeather(){
    document.getElementById("locationSearchContainer").className = "classHide";
    document.getElementById("currentWeatherContainer").className = "classHide";
    document.getElementById("hourlyConditionsContainer").className = "classHide";    
    document.getElementById("weeklyConditionsContainer").className = "classShow";    
    document.getElementById("newsContainer").className = "classHide";    
}
function showNews(){
    document.getElementById("locationSearchContainer").className = "classHide";
    document.getElementById("currentWeatherContainer").className = "classHide";
    document.getElementById("hourlyConditionsContainer").className = "classHide";    
    document.getElementById("weeklyConditionsContainer").className = "classHide";    
    document.getElementById("newsContainer").className = "classShow";    
}

//-----------------------------------------------------------------------------------
//----------------- Function to set current time //-----------------
//-----------------------------------------------------------------------------------
function setTime(){
    var today = new Date();

    var currentHours = today.getHours();
    currentHours = (today.getHours() + 11) % 12 + 1;
    if (currentHours < 10)  currentHours = '0'+currentHours;

    var currentMins = today.getMinutes();
    if (currentMins < 10)  currentMins = '0'+currentMins;

    var time = currentHours + ":" + currentMins;

    if(today.getHours()>12){
        timeCardAMPM.textContent = "PM"
    }
    else{
        if(today.getHours() == 12){
            timeCardAMPM.textContent = "PM"
        }
        else{
            timeCardAMPM.textContent = "AM"
        }
    }

    var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    timeCardTimeVal.textContent = time;
    timeCardDay.textContent = days[today.getDay()];
    timeCardDate.textContent = today.getDate();
    timeCardMonth.textContent = months[today.getMonth()];
    timeCardYear.textContent = today.getFullYear();
}

//-----------------------------------------------------------------------------------
//----------------- Function to change background based on if its day or night //-----------------
//-----------------------------------------------------------------------------------
function setBackground(){
    var currentTime = new Date().getHours();
    
    if (currentTime > 20 || currentTime < 6) {
        document.body.className = "night";
    }
    else {
        document.body.className = "day";
    }    
}

//-----------------------------------------------------------------------------------
//----------------- Looks for a place being typed in and activates the weather //-----------------
//-----------------------------------------------------------------------------------
const searchElement = document.querySelector('[searchBoxInput]')
const searchBox = new google.maps.places.SearchBox(searchElement)

searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()
    
    //Get Weather forecast ---------------------------------
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appplication/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        console.log(place)
        console.log(place.formatted_address)
        console.log(data)
        setWeatherData(data, place.formatted_address)
    })            
    setInterval(function(){
        fetch('/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'appplication/json'
            },
            body: JSON.stringify({
                latitude: latitude,
                longitude: longitude
            })
        }).then(res => res.json()).then(data => {
            console.log(place)
            console.log(place.formatted_address)
            console.log(data)
            setWeatherData(data, place.formatted_address)
        })
    }, 300000);

    //Get news headlines ---------------------------------
    fetch('/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'appplication/json'
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        setNewsHeadlines(data)
    })
    setInterval(function(){
        fetch('/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'appplication/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setNewsHeadlines(data)
        })            
    }, 300000);
})

//-----------------------------------------------------------------------------------
//----------------- Function to set all the weather data //-----------------
//-----------------------------------------------------------------------------------
function setWeatherData(data, place){
    //get time and date info
    const now = new Date();
    var currentHour = now.getHours();
    var currentDay = now.getDay();
    hours = getForecastHours(currentHour);
    days = getForecastDays(currentDay);

    //-------Current Conditions//-------
    icon.set('currentConditionsIcon', data.currently.icon)
    currentConditionsTempVal.textContent = data.currently.temperature.toFixed(0)
    currentConditionsWindVal.textContent = data.currently.windSpeed.toFixed(0)
    currentConditionsRainVal.textContent = data.currently.precipProbability.toFixed(0)

    //-------Hourly Forecast//-------
    //Times
    hour1.textContent = hours[0];
    hour2.textContent = hours[1];
    hour3.textContent = hours[2];
    hour4.textContent = hours[3];
    hour5.textContent = hours[4];
    hour6.textContent = hours[5];
    hour7.textContent = hours[6];
    //Temps
    hour1VAL.textContent = data.hourly.data[0].apparentTemperature.toFixed(0)
    hour2VAL.textContent = data.hourly.data[1].apparentTemperature.toFixed(0)
    hour3VAL.textContent = data.hourly.data[2].apparentTemperature.toFixed(0)
    hour4VAL.textContent = data.hourly.data[3].apparentTemperature.toFixed(0)
    hour5VAL.textContent = data.hourly.data[4].apparentTemperature.toFixed(0)
    hour6VAL.textContent = data.hourly.data[5].apparentTemperature.toFixed(0)
    hour7VAL.textContent = data.hourly.data[6].apparentTemperature.toFixed(0)
    //Rain
    hour1RainVal.textContent = data.hourly.data[0].precipProbability.toFixed(0)
    hour2RainVal.textContent = data.hourly.data[1].precipProbability.toFixed(0)
    hour3RainVal.textContent = data.hourly.data[2].precipProbability.toFixed(0)
    hour4RainVal.textContent = data.hourly.data[3].precipProbability.toFixed(0)
    hour5RainVal.textContent = data.hourly.data[4].precipProbability.toFixed(0)
    hour6RainVal.textContent = data.hourly.data[5].precipProbability.toFixed(0)
    hour7RainVal.textContent = data.hourly.data[6].precipProbability.toFixed(0)
    //Icons
    icon.set('hour1Icon', data.hourly.data[0].icon)
    icon.set('hour2Icon', data.hourly.data[1].icon)
    icon.set('hour3Icon', data.hourly.data[2].icon)
    icon.set('hour4Icon', data.hourly.data[3].icon)
    icon.set('hour5Icon', data.hourly.data[4].icon)
    icon.set('hour6Icon', data.hourly.data[5].icon)
    icon.set('hour7Icon', data.hourly.data[6].icon)

    //-------Weekly Forecast//-------
    console.log(days)
    //Days
    document.querySelector('[dayName1]').textContent = days[0];
    document.querySelector('[dayName2]').textContent = days[1];
    document.querySelector('[dayName3]').textContent = days[2];
    document.querySelector('[dayName4]').textContent = days[3];
    document.querySelector('[dayName5]').textContent = days[4];
    document.querySelector('[dayName6]').textContent = days[5];
    document.querySelector('[dayName7]').textContent = days[6];

    //Highs
    day1High.textContent = data.daily.data[1].temperatureHigh.toFixed(0);
    day2High.textContent = data.daily.data[2].temperatureHigh.toFixed(0);
    day3High.textContent = data.daily.data[3].temperatureHigh.toFixed(0);
    day4High.textContent = data.daily.data[4].temperatureHigh.toFixed(0);
    day5High.textContent = data.daily.data[5].temperatureHigh.toFixed(0);
    day6High.textContent = data.daily.data[6].temperatureHigh.toFixed(0);
    day7High.textContent = data.daily.data[7].temperatureHigh.toFixed(0);
    //Lows
    day1Low.textContent = data.daily.data[1].temperatureLow.toFixed(0);
    day2Low.textContent = data.daily.data[2].temperatureLow.toFixed(0);
    day3Low.textContent = data.daily.data[3].temperatureLow.toFixed(0);
    day4Low.textContent = data.daily.data[4].temperatureLow.toFixed(0);
    day5Low.textContent = data.daily.data[5].temperatureLow.toFixed(0);
    day6Low.textContent = data.daily.data[6].temperatureLow.toFixed(0);
    day7Low.textContent = data.daily.data[7].temperatureLow.toFixed(0);
    //Rain
    day1RainVal.textContent = data.daily.data[1].precipProbability.toFixed(0);
    day2RainVal.textContent = data.daily.data[2].precipProbability.toFixed(0);
    day3RainVal.textContent = data.daily.data[3].precipProbability.toFixed(0);
    day4RainVal.textContent = data.daily.data[4].precipProbability.toFixed(0);
    day5RainVal.textContent = data.daily.data[5].precipProbability.toFixed(0);
    day6RainVal.textContent = data.daily.data[6].precipProbability.toFixed(0);
    day7RainVal.textContent = data.daily.data[7].precipProbability.toFixed(0);
    //Icons
    icon.set('day1Icon', data.daily.data[1].icon)
    icon.set('day2Icon', data.daily.data[2].icon)
    icon.set('day3Icon', data.daily.data[3].icon)
    icon.set('day4Icon', data.daily.data[4].icon)
    icon.set('day5Icon', data.daily.data[5].icon)
    icon.set('day6Icon', data.daily.data[6].icon)
    icon.set('day7Icon', data.daily.data[7].icon)

    icon.play();
    // setTimeout(showHourlyWeather, 2500);
    // setTimeout(showWeeklyWeather, 5000);
    // setTimeout(showCurrentWeather, 7500);
}

//-----------------------------------------------------------------------------------
//----------------- Calculates an hours array to display for hourly forecast //-----------------
//-----------------------------------------------------------------------------------
function getForecastHours(currentHour){
    hours = []
    numHours = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
                "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", 
                "12 AM", "A AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM"]

    for(var i = 0; i < 8; i++){
        hours[i] = numHours[currentHour + i + 1]
    }
    return hours;
}

//-----------------------------------------------------------------------------------
//----------------- Calculates a days array to display for weekly forecast //-----------------
//-----------------------------------------------------------------------------------
function getForecastDays(currentDay){
    daysList = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    days = [];
    for(var i = 0; i < 9; i++){
        days[i] = daysList[currentDay + i]
    }
    return days;
}

//-----------------------------------------------------------------------------------
//----------------- Function to set all the news data //-----------------
//-----------------------------------------------------------------------------------
function setNewsHeadlines(data){
    //Headlines
    newsBoxHeadline1.textContent = data.articles[0].title;
    newsBoxHeadline2.textContent = data.articles[1].title;
    newsBoxHeadline3.textContent = data.articles[2].title;
    //Short descriptions
    newsBoxArticle1.textContent = data.articles[0].description.substring(0, 350) + " ... ";
    newsBoxArticle2.textContent = data.articles[1].description.substring(0, 350) + " ... ";
    newsBoxArticle3.textContent = data.articles[2].description.substring(0, 350) + " ... ";
    //Source
    newsBoxSource1.textContent = "| " + data.articles[0].source.name;
    newsBoxSource2.textContent = "| " + data.articles[1].source.name;
    newsBoxSource3.textContent = "| " + data.articles[2].source.name;
    //Thumbnails
    document.getElementById("newsBoxImg1").src = data.articles[0].urlToImage;
    document.getElementById("newsBoxImg2").src = data.articles[1].urlToImage;
    document.getElementById("newsBoxImg3").src = data.articles[2].urlToImage;
}

//-----------------------------------------------------------------------------------
//----------------- Function to cycle through all screens //-----------------
//-----------------------------------------------------------------------------------
function cycleScreens(){
    setTimeout(function(){ showCurrentWeather(); }, 15000);
    setTimeout(function(){ showHourlyWeather(); }, 30000);
    setTimeout(function(){ showWeeklyWeather(); }, 45000);
    setTimeout(function(){ showNews(); }, 60000);
}

//-----------------------------------------------------------------------------------
//----------------- Refreshes needed functions //-----------------
//-----------------------------------------------------------------------------------
setBackground();
setTime();
setInterval(function(){ setBackground(); }, 1000);
setInterval(function(){ setTime(); }, 1000);
setInterval(function(){ cycleScreens(); }, 75000);
