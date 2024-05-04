document.addEventListener('DOMContentLoaded',
()=>{
        let Today=new Date();
        year = Today.getFullYear();
        document.getElementById("copyright").innerText=year;
        
    }
)

function Add(value){
    document.getElementById("display").value += value;
}

function Eval(){
    var expression = document.getElementById("display").value;
    var result=eval(expression);
    if (result==undefined){
        window.alert("Enter Valid Expression ");
    }
    document.getElementById("display").value=result;
}

function Clr(){
    document.getElementById("display").value=" ";
}


