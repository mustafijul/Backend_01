// object in js
// let obj = {
//     student: "tamim",
//     age : 25
// }

// Object.freeze(obj)
// obj.age = 50;
// console.log(obj);


// Returning from function
// const number = () =>{
//     return 70;
// }



// const ans = number();
// console.log(ans);


const photos = async() =>{
const blob = await fetch('https://jsonplaceholder.typicode.com/photos');
const response = await blob.json()
const result = response.slice(0, 50)
console.log(result);

}

photos()

