// console.log("Document Object Model");
// console.log("hello");

// let h2 = document.getElementById("head");
// console.dir(h2.innerText);
 
// h2.innerText = h2.innerText  + " from apna college";

// let divs = document.querySelectorAll(".box");

// let idx = 0;
// for (div of divs) {
//     div.innerText = `new unique value is ${idx}`;
//     idx++;
// }

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));


// let div = document.querySelector("div");
// div.style.backgroundColor = "green";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me" ;
// console.log(newBtn);

let div = document.querySelector("div");
div.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<b>Hello</b>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "green" ;

document.querySelector("body").prepend(newBtn);

let paragraph = document.querySelector("p");
paragraph.classList.add("newClass");
