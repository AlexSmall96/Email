document.addEventListener("DOMContentLoaded", function() {
    const mailRows = document.getElementsByClassName("mail-row")

    
    const emails = {
        mail1:
                    {from:"jon",
                    subject:"meeting",
                    content:"can you meet at 1?",
                    time: "12:35pm"}
        ,
        mail2:
            {from:"bob",
            subject:"meeting tomorow",
            content:"can you meet at 2?",
            time: "13:05pm"}
        
};

for (let row of mailRows){
    row.addEventListener("click", function(){
        mailId = row.id;
        console.log(emails[mailId])
    })
}

});