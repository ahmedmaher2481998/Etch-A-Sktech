 
const container = document.querySelector("body .container")
function grid(x){ 
    for (let i = 0; i < x; i++){ 
        if(!Number.isInteger(x)){ 
            alert("Please Enter A number");
            return "";
        }
        let row = document.createElement('div');
        row.className=`row`;
        container.appendChild(row)
        
        for(let j = 0;j < x; j++){ 
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
}
grid(16);
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
    
    if(Number.isInteger(dim)){ 
        grid(dim);
    
    }
    else grid(16);
   
});
let clear =document.querySelector(".clear");
clear.addEventListener("click",function(){
    let row = document.querySelectorAll(".square-div");
    for(let i = 0 ;i < row.length; i++){ 
        row[i].style.cssText="background-color: white;"
    } 

})

