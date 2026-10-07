function add_3_Numbers(){
    var Number1 = parseInt(document.getElementById("number1").value);
    var Number2 = parseInt(document.getElementById("number2").value);
    var Number3 = parseInt(document.getElementById("number3").value);
    sum = Number1 + Number2 + Number3;
    document.getElementById("Adding three numbers: " + sum);
}