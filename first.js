// console log is for printing inside console of the browser

console.log("Hello javascript");

console.log("Shubham Hire");

console.log("I love shubham");

console.log(24);

name = "shubham";
age = 19;
console.log(age);
a = null ;
console.log(a);
b = undefined ;
console.log(b);
isFollow = false ;
console.log(isFollow);

// var k = 10 ;
// console.log(k) ;

// lmaoShubham = "I am a disco dancer" ;
// console.log(lmaoShubham);


// let hero = "tonystark" ;
// console.log(hero);

// hero = "spiderman";

// console.log(hero);

// {
//     let f = 5;
//     console.log(f);
// }
// let i = 10;
// console.log(typeof i);




// const student = {
//     name : "Shubham" ,
//     age : 20 ,
//     CGPA : 8.2 , 
//     pass : true

// }; 

// console.log(student);

// student.name = "lmao" ;
// console.log(student.name);


const info = {
    name: "parker",
    color: "black",
    rating: 5,
    dealoftheday: true,
    MRP: 207
};

console.log(info);

console.log(typeof info);


let profile = [
    {
        name: "shubham Hire",
        isFollow: true,
        posts: 195,
        followers: 569,
        following: 4,
        threadsAcc: "lmaoshubham",
        bio: "I am real kid"
    }
];

// console.log(profile[0].name);

for (let i = 0; i < profile.length; i++) {
    console.log(profile[i].name);
    console.log(profile[i].followers);
};