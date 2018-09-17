let op=[];
let result=[];
let input1="";
let input2="";
let box=document.querySelectorAll(".print");
for(let i=0;i<box.length;i++){
  box[i].addEventListener("click",calculate);
}
function calculate (){
  /*clear count*/
  if(this.id=="c"){
     op=[];
     result=[];
     input1="";
     input2="";
  }
  /*clear if the result is present*/
  if(result.length>0){
     op=[];
     result=[];
     input1="";
     input2="";

     document.getElementById('screen').innerHTML=0;
}
  /*getting input1 and operator*/
  if(input1.length<1&&this.value=="-"){
    input1=this.value;
    document.getElementById('screen').innerHTML=input1;
  }
  else if(input1.length>=0&&op.length==0&&this.value!="-"&&this.value!="+"&&this.value!="*"&&this.value!="/"){
    input1+=this.value;
    document.getElementById('screen').innerHTML=input1;
  }
  else if(input1.length>=1&&op.length==0){
    if(this.value=="+"||this.value=="-"||this.value=="*"||this.value=="/"){
    op=this.value;
    document.getElementById('screen').innerHTML=op;
  }}
  /*getting input 2*/
  else if(op.length==1&&input2.length<1&&this.value=="-"){
    input2+=this.value;
    document.getElementById('screen').innerHTML=input2;
  }
  else if(op.length==1&&input2.length>=0){
    input2+=this.value;
    document.getElementById('screen').innerHTML=input2;
  }
    /*getting result*/
 if(this.id=="equel") {
   input1=Number(input1);
   input2=Number(input2);
   /* based on operator calculate number*/
   switch (op[0]) {
     case "+": result=input1+(input2);
     break;
     case "-": result=input1-(input2);
     break;
     case "*": result=input1*(input2);
     break;
     case "/": result=input1/(input2);
       break;
     default:result=0;
   }
   document.getElementById('screen').innerHTML=result;
   console.log(input1);
  ans=result;
  input2="";
  op=[];
  result=[];
 }
}
