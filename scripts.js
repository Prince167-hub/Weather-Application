// script.js
document.getElementById('weather-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const city = document.getElementById('city-input').value;
    const apiKey = 'AIzaSyBQPW7bBDIxsaXJjHXCZjPGvyFJZuEPrvo';  // Replace with your API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                // Show error message if city is not found
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('weather-details').style.display = 'none';
            } else {
                // Display weather data
                document.getElementById('error-message').style.display = 'none';
                document.getElementById('weather-details').style.display = 'block';

                document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('error-message').style.display = 'block';
        });
});
