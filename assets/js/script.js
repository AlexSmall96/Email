document.addEventListener("DOMContentLoaded", function() {
    const flags = document.getElementsByClassName('fa-flag');

    for (let flag of flags){
        flag.addEventListener("click", function(){
           if (flag.style.color === 'black'){
            flag.style.color = 'red';
           } else {
            flag.style.color = 'black'
           }
        })
    }
});