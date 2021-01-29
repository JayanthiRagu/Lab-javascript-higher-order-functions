const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

//function1
function slice(foods)
{
    return foods.slice(1,4);
}
const modifiedFood =  slice(foods);
console.log(modifiedFood);

//function2
function splice(foods){

    foods.splice(2,0,"noodles", "icecream");
}
splice(foods);
const modifiedFood1 = foods;
console.log(modifiedFood1);

//function3
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray)
{
    return numberArray.filter(num => (num%2==0));
     
}
let evenNumbers = isEven(numberArray);
console.log(evenNumbers);

//function4
function isPrime(numberArray){
    let prime=[];
    numberArray.forEach((num,index,numberArray) => {
        let mid=num/2;
        let flag=0;
        for(let i=2;i<=mid;i++)
        {
            if(num%i==0)
            {
                flag=1;
                break;
            }
        }
        if(flag==0)
        {
            prime.push(num);
        }
    });
    return prime;
}
function nonPrime(numberArray)
{
    let prime=isPrime(numberArray);
    let nonPrime=[];
    numberArray.forEach((num,index,numberArray)=>{
        if(prime.includes(num) == false)
        {
            nonPrime.push(num);
        }
    });
    return nonPrime;
}
let nonPrimeNum = nonPrime(numberArray);
console.log(nonPrimeNum);

//function5 => lambda function
let evenNumbers1 = numberArray.filter(numberArray => (numberArray%2==0));
console.log(evenNumbers1);

//function6
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    return myArray.map(function(num)
    {
        return num*num;
    });
}
let squareNum = findSquareOfNumbers(myArray);
console.log(squareNum);

//function7
let myArray1 = [2, 3, 5, 10];
function multiply(myArray)
{
    return myArray.reduce(function (num,val)
    {
        return num*val;
    },1);
}
let multiplyVal = multiply(myArray1);
console.log(multiplyVal);