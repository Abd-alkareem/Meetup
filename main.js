document.querySelectorAll(".shedule .controle>span ").forEach(function(ele,ind){
    ele.addEventListener("click",function(){
        document.querySelectorAll(".shedule .controle>span ").forEach(function(e){
            e.classList.remove("active");
        })
        ele.classList.add("active");
        
        document.querySelectorAll(".shedule .container .holder .page").forEach(function(e){
            
        e.classList.add("hidden");
        setTimeout(function(){
            e.classList.remove("active");
            e.classList.remove("hidden");
            document.querySelectorAll(".shedule .container .holder .page")[ind].classList.add("active");
        },300);
        
        })
    })
})