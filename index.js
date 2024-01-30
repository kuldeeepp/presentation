// function examplefunc() {
//   if (true) {
//     let functionScopedvar = "i am const-scoped";
//     //console.log(functionScopedvar);
//     let functionScopedvar = "hello";
//     console.log(functionScopedvar);
//   }
//   // console.log(functionScopedvar);
// }
// examplefunc();
// //console.log(functionScopedvar);

// let shadowedvar = "i am global";
// function example() {
//   let shadowedvar = "i am local";
//   console.log(shadowedvar);
// }
// example();
// console.log(shadowedvar);

// let person={
//     name:"alex",
//     age:78,
//     dob:28-03-2004,
//     isStudent:false
// };
// console.log(person.name)

// let fruits = [1, "banana", "orange"];
// console.log(fruits[1]);

// function add(a,b)0
// {
//     return a+b;

// }

// var a=add(3,5);
// console.log(a);

// for(let i=1;i<6;i++)
// {
//     console.log(i);
// }

// console.log("//******//");
// console.log("//******//");
// console.log("//******//");
// let c=0;
// while(c<5)
// {
//     console.log(c);
//     c++;
// }

// console.log("**********");
// console.log("**********");
// console.log("**********");
// let g=0;
// do{
//     console.log(g);
//     g++
// }while(g<5);

// let person={ name: "john",age:30,occupation:"dev"};
// for(key in person)
// {
//     console.log(key+": "+person[key]);
// }

// let car = {
//   make: "toyata",
//   model: "fortuner",
//   year: 2021,
//   iselectric: false,
//   start: function () {
//     console.log("engine started");
//   },
// };
// car.start();

// function book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// let book1 = new book("the catcher in the Rye", "jd.sablinger", 1951);
// let book2 = new book("to kill a mockingbird", "harper lee", 1969);

// //console.log(book1.year);



// let fruits = ["aapple", "orange", "grape"];
// console.log(fruits[0]);
// console.log(fruits[2]);

// fruits.push("kiwi");
// console.log(fruits);
// let last = fruits.pop();
// console.log(last);
// console.log(fruits);

// fruits.unshift("mango");
// console.log(fruits);
// let z = fruits.shift();
// console.log(fruits);

// let indexOfOrange = fruits.indexOf("orange");
// console.log(indexOfOrange);

// let c = fruits.slice(1, 3);
// console.log(c);

// let removed = fruits.splice(0, 2, "pear", "melon");
// console.log(fruits);
// let morefruits = fruits.concat("dragon fruits", "pineapple");
// console.log(morefruits);








// const multiply =function(a,b){
//     return a*b;
// };


// const product=multiply(4,6);
// console.log("function expression-product:",product);


// const divide=(a,b)=>a/b;
// const div=divide(6,3);
// console.log(div);

try{
    
    throw new Error("an error");

}catch(error)
{
    console.error(error.message);
}finally{
    console.log("cleanup code");
}

