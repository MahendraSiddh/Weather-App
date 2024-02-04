const apiKey= "4787c651b9169c69f8ed3809b3872d8a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");


        async function chechWeather(city){
            const responce = await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data  = await responce.json();


            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        }

        searchBtn.addEventListener("click",()=>{
            chechWeather(searchBox.value);
        })