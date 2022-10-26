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
        showFruit(transformFruit);
    }
};
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
var showFruit = function (transformFruit) {
    var img = document.createElement('img');
    img.setAttribute('src', transformFruit.image);
    img.setAttribute('class', 'card-img-top');
    fruitItem === null || fruitItem === void 0 ? void 0 : fruitItem.append(img);
    var cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardBody.innerHTML = "<h5 class=\"card-title\">".concat(transformFruit.name, "</h5><h6 class=\"card-subtitle mb-2 text-muted\">Price:$").concat(transformFruit.price, " per ").concat(transformFruit.unit, "</h6>");
    fruitItem === null || fruitItem === void 0 ? void 0 : fruitItem.insertAdjacentElement('beforeend', cardBody);
};
//Call getFruits() method globally
