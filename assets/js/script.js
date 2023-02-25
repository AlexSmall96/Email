document.addEventListener("DOMContentLoaded", function() {
    const flags = document.getElementsByClassName('fa-flag');
    for (let flag of flags){
        flag.addEventListener("click", function(){
            console.log(flag)
        })
    }
});