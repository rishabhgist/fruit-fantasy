//Declare global container constant to represent <div> container
const container = document.getElementById('container');
const fruitItem = document.getElementById('fruit-element');
//Define Fruit Object type with required properties
type fruit = {
    id: number,
    name: string,
    price: number,
    image: string,
    unit: string
};

//Fetch data from server using getFruits() method


//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 


//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container


//Call getFruits() method globally
