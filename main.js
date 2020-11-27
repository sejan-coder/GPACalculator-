            
//Calsulation GPA IN BANGALDESH. 
//collect data.
function myfunction(){
    var btn='';
    btn = document.querySelector('.data').value;
var subMark = btn ;

if (subMark >= 80 &&  subMark <=100 ){
    document.querySelector("#result").innerHTML=" A+ ";
}else if( subMark >= 70 && subMark <=79  ){
    document.querySelector("#result").innerHTML=" A ";
}else if( subMark >= 60 && subMark <=69  ){
    document.querySelector("#result").innerHTML=" A- ";
}else if( subMark >= 50 && subMark <=59  ){
    document.querySelector("#result").innerHTML=" B ";
}else if( subMark >= 40 && subMark <=49  ){
    document.querySelector("#result").innerHTML=" C ";
}else if( subMark >=33 && subMark <=39  ){
    document.querySelector("#result").innerHTML="D";
}else{
    document.querySelector("#result").innerHTML="F";
} 
}

