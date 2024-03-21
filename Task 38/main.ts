// Creating Function
function describeCity(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describeCity("Karachi");
describeCity("Tokyo", "Japan");
describeCity("Paris", "France");