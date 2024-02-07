fetch('https://api.example.com/data')
  .then(response => response.json()) // Convert the response to JSON
  .then(data => console.log(data)) // Do something with the data
  .catch(error => console.error('An error occurred:', error));
