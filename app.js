 
const container = document.querySelector("body .container")
function grid(x){ 
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
     /*let cells = document.querySelectorAll(".square-div");
     for(let i = 0; i < cells.length; i++){ 
         cells[i].addEventListener('mouseover',function(e){ 
             e.target.classList.add("blacked")
    
         });
     }*/
}
// fun to generate random colors to fill the squares when hoved on 
function colorize(){ 
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color= `rgb(${r},${g},${b})`
    return color;
}
function intilize(){ 
    grid(16);
    let cells = document.querySelectorAll(".square-div");
     for(let i = 0; i < cells.length; i++){ 
         cells[i].addEventListener('mouseover',function(e){ 
             e.target.classList.add("blacked")
    
         });
     }
}
intilize();
document.querySelector(".btn").addEventListener('click',function(){ 
    let row = document.querySelectorAll(".square-div");
    for(let i = 0 ;i < row.length; i++){ 
        row[i].classList.remove("blacked")
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
    Array.from(document.querySelectorAll('.square-div')).map(sqr=>{ 
        sqr.addEventListener('mouseover',function(e){ 
            e.target.classList.add('blacked')
        })
    })
});
let clear =document.querySelector(".clear");
clear.addEventListener("click",function(e){
    let row = document.querySelectorAll(".square-div");
    for(let i = 0 ;i < row.length; i++){ 
        row[i].classList.remove("blacked")
    }

    Array.from(document.querySelectorAll('.square-div')).filter(div=> {
        if(div.style.backgroundColor) return true ; 
        else  return false ; 
    }).map(sqr=>{ 
        sqr.style.backgroundColor = null;
})
})
document.querySelector(".color").addEventListener('click',function(){ 
    Array.from(document.querySelectorAll('.square-div')).map(sqr=>{ 
        sqr.addEventListener('mouseover',function(e){ 
            e.target.style.backgroundColor = `${ colorize()}` 
        })
    })
})
// let rgb = document.querySelector(".rgb");
// rgb.addEventListener("click",function(e){
//     let row = document.querySelectorAll(".square-div");
//     for(let i = 0; i < row.length; i++){ 
        
//     }
    
// })

