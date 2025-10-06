console.log("hello");

let btn = document.querySelector("#hello");
let div = document.querySelector("div");
let mode = "light";

// addEventListener(("click"), function(){
//     btn.style.color = "white";
//     btn.style.padding = "10px";
//     btn.style.backgroundColor = "black";
//     btn.style.borderRadius = "15%";
//     console.log("Button was clicked")
// })


btn.addEventListener("click",() => {
    if (mode == "light") {
        mode = "dark";
        let b = document.querySelector("body");
        b.style.backgroundColor = "black";
    } else {
        mode = "light";
        let b = document.querySelector("body");
        b.style.backgroundColor = "white" ;
    }
    console.log(mode);
})



