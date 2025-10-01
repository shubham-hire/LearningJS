console.log("Document Object Model");
console.log("hello");

let h2 = document.getElementById("head");
console.dir(h2.innerText);
 
h2.innerText = h2.innerText  + " from apna college";

let divs = document.querySelectorAll(".box");

let idx = 0;
for (div of divs) {
    div.innerText = `new unique value is ${idx}`;
    idx++;
}
