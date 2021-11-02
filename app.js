 
const container = document.querySelector("body .container")
function grid(x,colorize = false){ 
    for (let i = 0; i < x; i++){ 
        if(!Number.isInteger(x)){ 
            alert("Please Enter A number");
            
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
     let cells = document.querySelectorAll(".square-div");
     if(colorize){ for(let i = 0; i < cells.length; i++){ 
        cells[i].addEventListener('mouseover',function(e){ 
            e.target.style.background=colorize();
   
        }); }}
     else{
     for(let i = 0; i < cells.length; i++){ 
         cells[i].addEventListener('mouseover',function(e){ 
             e.target.classList.add("blacked")
    
         });
     }}}

function colorize(){ 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color= `rgb(${r},${g},${b})`
    return color;
}
grid(16);
document.querySelector(".btn").addEventListener('click',function(){ 
    let row = document.querySelectorAll(".square-div");
    for(let i = 0 ;i < row.length; i++){ 
        row[i].classList.add("blacked")
    }
    var dim;
    do{
         dim = parseInt(prompt("Enter The number of squares per side for the new grid:"));
    }while(dim > 100);
    container.innerHTML=''
    
    if(Number.isInteger(dim)){ 
        grid(dim);
    
    }
    else grid(16);
   
});
let clear =document.querySelector(".clear");
clear.addEventListener("click",function(e){
    let row = document.querySelectorAll(".square-div");
    
    for(let i = 0 ;i < row.length; i++){ 
        row[i].classList.remove("blacked")
        row[i].style.backgroundColor=''
    } 
    

})
document.querySelector('.rgb').addEventListener('click',function(){
    let dim;
    do{
        dim = parseInt(prompt("Enter The number of squares per side for the new grid:"));
   }while(dim > 100);
   container.innerHTML=''
   
   if(Number.isInteger(dim) && dim > 5 ){ 
       grid(dim,true);
   
   }
   else grid(16,true);
   let rgb = colorize();
    let cells = document.querySelectorAll(".square-div");
    console.log(cells)
    for(let i = 0 ;i < cells.length; i++){ 
        cells[i].style.backgroundColor=` ${rgb}`;
    }
        
   
    


})
