const btns = document.querySelectorAll(".btn")
const count = document.querySelector("#count")
let counter = 0;

btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
        const  collect = e.currentTarget.classList;

        const color = `rgb(${predictColor()},${predictColor()},${predictColor()})`
        if(collect.contains("decrease")){
            counter--
            count.style.color = "red"
        }else if(collect.contains("increase")){
            counter++;
            count.style.color = color
        }else{
            counter = 0;
            count.style.color = "black"
        }

        
        count.textContent = counter;
        
    })
})

function predictColor(){
    return Math.floor(Math.random() * 256)
}