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
const getFruits = () => {
    fetch('http://localhost:3000/fruits')
        .then((response) => response.json())
        .then((data)=> transform(data))
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
const transform = (data: any) => {
    for (const key in data) {
    let transformFruit: fruit = {
                id: data[key].id,
                name: data[key].name,
                price: Number(data[key].price), 
                image: data[key].image,
                unit:data[key].unit
        }
    }
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container


//Call getFruits() method globally
