fetch('https://api.openweathermap.org/data/2.5/weather?q={LOCATION}&appid={API_KEY}&units=metric')
  .then(response => response.json())
  .then(data => {
      // Handle successful response
      console.log(data);
      // Add your custom logic here to display the weather data on the page
  })
  .catch(error => console.error('Oops, something went wrong:', error));
