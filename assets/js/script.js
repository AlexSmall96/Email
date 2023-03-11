document.addEventListener("DOMContentLoaded", function() {
    // Click on flag icons to turn text red
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

    // Click on emails to make text not bold 
    const emails = document.getElementsByClassName('mail-preview');
    for (let email of emails){
        email.addEventListener("click", function(){
            this.style.fontWeight = "normal";
            this.style.backgroundColor = "#f5f8fc";
        });
    }

    const mailList = document.getElementById("mail-list");
    const mailRows = mailList.getElementsByClassName("row");
      
    console.log(mailRows)
    for (let row of mailRows){
    
    
        row.addEventListener("mouseenter", function(){
            this.style.boxShadow = "0px 2px 2px grey";
            this.getElementsByClassName("time")[0].innerHTML = `<i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-envelope-open"></i><i class="fa-solid fa-circle-exclamation"></i>`
            this.getElementsByClassName("time")[0].style.padding = "2px";
        });
   
        row.addEventListener("mouseleave", function(){
            this.style.boxShadow = "none";
            this.getElementsByClassName("time")[0].innerHTML  = `14:52pm`;
        });
    };
    
    const folders = document.getElementsByClassName("side-menu-row");
    
    for (let folder of folders){
        folder.addEventListener("click", function(){
            for (let fold of folders){
                if (this === fold){
                    this.style.backgroundColor = "#88d7eb";
                } else {
                    fold.style.backgroundColor ="#f6f8fc"
                }
            }
        })
    }

});