function describe_city(city, country) {
    if (country === void 0) { country = 'USA'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('New York'); // Using the default country
describe_city('Los Angeles'); // Using the default country
describe_city('Tokyo', 'Japan'); // Specifying a different country
