let container = document.querySelector(".container");
let div = document.createElement("div");
for(let i = 0; i <= 4; i++){ 
    for(let j = 0; j <= 4; j++ ){ 
        div.textContent='1';
        container.appendChild(div)

    }
}