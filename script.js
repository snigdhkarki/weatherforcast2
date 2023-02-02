// Add event listener for form submit
document.querySelector('form').addEventListener('submit', function (event) {
    
    event.preventDefault();
  
    const search = document.querySelector('#location');
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + search.value + '&appid=b190a0605344cc4f3af08d0dd473dd25&units=metric';
  
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        // Display the data
        document.querySelector('#longitude').innerHTML = 'Longitude: ' + data.coord.lon;
        document.querySelector('#latitude').innerHTML = 'Latitude: ' + data.coord.lat;
        document.querySelector('#mintemp').innerHTML = 'Min Temp: ' + data.main.temp_min + '°C';
        document.querySelector('#maxtemp').innerHTML = 'Max Temp: ' + data.main.temp_max + '°C';
  
        // Show the weather card
        document.querySelector('.weather-card').style.display = 'flex';
      });
  });