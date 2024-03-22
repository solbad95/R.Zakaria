async function getWeather() {
    const apiKey = '6fa0add22f18d61ab6e09eee6d129a3d';
    const cityInput = document.getElementById('cityInput');
    const weatherInfoDiv = document.getElementById('weatherInfo');

    
    const timezonedbKey= '8USPLRXQVVE8'



   //const heure   = now.getHours();
   //const minute  = now.getMinutes();

    if (cityInput.value === '') {
        alert('Veuillez entrer le nom de la ville.');
        return;
    } 
    try {
            console.log(cityInput.value);
            console.log();
        
            const response = isNaN(cityInput.value) ? 
            await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric&lang=fr`) : // ":" = else
            await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${cityInput.value},fr&appid=${apiKey}&units=metric&lang=fr`);
            
            
            
            const data = await response.json();
            
            // await fetch('https://api.api-ninjas.com/v1/worldtime?city=${cityInput.value}', headers:'X-Api-Key': 'JjMD0BQBDVA3p7zQ27UVlg==6VdIXC86cSthWhxP'),
            

            if (data.cod === '404') {
            alert('Ville non trouvée. Veuillez vérifier le nom de la ville.');
            return;
            }

            const weatherInfo = `
            <div>
            
            <h2>Météo à ${data.name}, ${data.sys.country}</h2>
            <p>(Latitude : ${data.coord.lat}, Longitude: ${data.coord.lon})</p>
            <h3>Heure locale</h3>
            <p>${data.zoneName}</p>
            <h3>Conditions météorologiques actuelles</h3>
            <p class=meteo>
                <span>Couverture nuageuse : ${data.clouds.all} %</span>
                <span>${data.weather[0].description} </span> 
                <img height=70 width=70 src=https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png> 
            </p> 
               <p>Température : ${data.main.temp} °C (Ressentie : ${data.main.feels_like} °C)</p>
            <p class=meteo>
                <span>Humidité : ${data.main.humidity}%</span>
                <span>Pression : ${data.main.pressure} hPa</span>
            </p>
            <p class=meteo>
            <span>Vitesse du vent : ${data.wind.speed} m/s</span>
            <span>Visibilité : ${data.visibility} m</span>
            </p>
            </div>
            <div id="map">

        </div>

            `;

            weatherInfoDiv.innerHTML = weatherInfo;

            //await fetch('https://tile.openweathermap.org/map/temp_new/4/0/15.png?appid=6fa0add22f18d61ab6e09eee6d129a3d');

     // var latitude = 45.76287; // Clermont
        // var longitude = 3.088276; // Clermont
        var latitude = data.coord.lat;// Coordonnées de latitude et de longitude
        var longitude = data.coord.lon;

        // Création de la carte avec Leaflet
        var map = L.map('map').setView([latitude, longitude], 15); // Le 17 est le niveau de zoom, ajustez selon vos besoins (12 par défaut)

        // Ajout d'une couche OpenStreetMap à la carte
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© CostaDelMarco'
        }).addTo(map);

        L.tileLayer(`http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, { // apiKey nécessite une anti-apostrophe AltGR 7 x2
            attribution: '© CostaDelMarco'
        }).addTo(map);

        // Ajout d'un marqueur à l'emplacement spécifié
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Position : ' + latitude + " / " + longitude)
            .openPopup();

    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques:', error);
        alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    }
}