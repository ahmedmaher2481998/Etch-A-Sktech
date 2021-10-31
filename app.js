 
const container = document.querySelector("body .container")
for (let i = 0; i < 16; i++){ 
    let row = document.createElement('div');
    row.className=`row`;
    container.appendChild(row)
    for(let j = 0;j < 16; j++){ 
        let cell = document.createElement('div');
        cell.className=`square-div`;
        row.appendChild(cell);
    }
 }
 let cells = document.querySelectorAll(".row");
 for(let i = 0; i < cells.length; i++){ 
     cells[i].addEventListener('mouseover',function(e){ 
         e.target.style.cssText="background-color: black;"

     });
 }
document.querySelector(".btn").addEventListener('click',function(){ 
    let row = document.querySelectorAll(".square-div");
    for(let i = 0 ;i < row.length; i++){ 
        row[i].style.cssText="background-color: white;"
    }
    var dim;
    do{
         dim = parseInt(prompt("Enter The size of the grid :"));
    }while(dim > 100);
    container.innerHTML=''
    for (let i = 0; i < dim; i++){ 
        let row = document.createElement('div');
        row.className=`row`;
        container.appendChild(row)
        
        for(let j = 0;j < dim; j++){ 
            let cell = document.createElement('div');
            cell.className=`square-div`;
            row.appendChild(cell);
        }
     }
     let cells = document.querySelectorAll(".row");
     for(let i = 0; i < cells.length; i++){ 
         cells[i].addEventListener('mouseover',function(e){ 
             e.target.style.cssText="background-color: black;"
    
         });
     }

    
});

