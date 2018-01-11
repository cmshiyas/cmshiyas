
emailFeild = document.getElementById("email");

emailFeild.onfocus = function(){
    console.log("Shiyas");
    if (emailFeild.value == "your email"){
        emailFeild.value="";
    } else{
        
    }
};

emailFeild.onblur = function(){
    if(emailFeild.value == ""){
        emailFeild.value="your email"
    }
} ;

 function simpleMessage(){"This is an interval message."};

setInterval(simpleMessage,5000);