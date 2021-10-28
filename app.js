const container = document.querySelector(".container");
const row = document.createElement('div').classList.add("row");
const sqrdiv = document.createElement('div').classList.add("square-div")
for(let i = 0 ; i <4; i++){ 
    console.log(i)
    console.log(typeof(container))
    container.appendChild(row);
    let rowselect = document.querySelector(".row:last-child")
    for(let j = 0 ; j < 4 ; j++){ 
        sqrdiv.textcontent='1';
        rowselect.append(sqrdiv)
        console.log(i,j)
    }
}