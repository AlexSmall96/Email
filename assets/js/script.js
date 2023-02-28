document.addEventListener("DOMContentLoaded", function() {
    const flags = document.getElementsByClassName('fa-flag');

    for (let flag of flags){
        flag.addEventListener("click", function(){
            let mailPreview = document.getElementById(`${this.id}-preview`);
            if (this.style.color === 'black'){
            this.style.color = 'red';
            mailPreview.style.color = 'red';
           } else {
            this.style.color = 'black'
            mailPreview.style.color = 'black';
           }
        })
    }

    const emails = document.getElementsByClassName('mail-preview');

    for (let email of emails){
        email.addEventListener("click", function(){
            email.style.fontWeight = "normal";
            email.style.backgroundColor = "#f5f8fc";
        });
    }


});