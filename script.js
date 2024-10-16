//1 იპოვეთ ყველაზე დიდი რიცხვი მოცემულ მასივში let arr = [1, 3, 5, 7, 2];
let arr = [1, 3, 5, 7, 2];
let largestNumber = Math.max(...arr);
console.log(largestNumber);

//2 შეაბრუნეთ reverse მასივი let arr = [1, 2, 3, 4, 5]; 
let arr5 = [1, 2, 3, 4, 5];
let reversedArr = arr5.reverse();
console.log(reversedArr);

//3 მოცემულ ერეიში დააჯამეთ მონაცემები let arr = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((acc, current) => acc + current, 0);
console.log(sum);

//4 მოცემული ორი ერეიდან იპოვეთ მსგავსი რიცხვები let arr1 = [1, 2, 3, 4]; let arr2 = [3, 4, 5, 6];
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let similarNumbers = arr1.filter(value => arr2.includes(value));
console.log(similarNumbers);

//5  შექმენით ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ მოერე ფუნქციის პარამეტრად და ifelse მეშვეობით დაბეჭდეთ რამე ინფორმაცია (მაგ: თუ რამე ნივთის ფასი. მაღაზიაში არის 50 ლარზე მეტი ესეიგი ძვირია თუ 20-50 დიაპაზონშია მოქცეული საშუალო თუ ნაკლები იაფი)

function checkPrice(price) {
    if (price > 50) {
        return "expensive";
    } else if (price >= 20 && price <= 50) {
        return "medium";
    } else {
        return "cheap";
    }
}

function printPriceInfo(itemPrice, priceFunction) {
    let info = priceFunction(itemPrice);
    console.log(`The item is ${info}`);
}



 