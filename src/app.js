//Declare global container constant to represent <div> container
var container = document.getElementById('container');
var fruitItem = document.getElementById('fruit-element');
//Fetch data from server using getFruits() method
var getFruits = function () {
    fetch('http://localhost:3000/fruits')
        .then(function (response) { return response.json(); })
        .then(function (data) { return transform(data); });
};
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
var transform = function (data) {
    for (var key in data) {
        var transformFruit = {
            id: data[key].id,
            name: data[key].name,
            price: Number(data[key].price),
            image: data[key].image,
            unit: data[key].unit
        };
        console.log(transformFruit);
    }
};
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
//Call getFruits() method globally
