const block = document.getElementById("block");
let clicked = false;
const humberger = document.querySelector(".humberger");
let products ;


humberger.addEventListener("click",()=>{

    if(clicked){
        
        block.classList.add("linksout");
        setTimeout(()=>{
            
            block.className='';
            block.classList.add("none");
        },400);
        
        clicked=false;
    }
    else{
        
        block.className='';
        block.classList.add("links");
        clicked=true;
    }
});

const setproducts = (pro) =>{
    products = pro;
}