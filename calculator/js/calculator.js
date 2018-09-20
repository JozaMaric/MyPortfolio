let op=[];
let result=[];
let input1="";
let input2="";
let ans=[];
let decimal=[];
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
     ans=[];
     decimal=[];
     document.getElementById('screen').innerHTML=0;
  }
  /*getting negativ input*/
if(op.length===0 && input1.length===0&& this.value==="-"){
input1=this.value;
document.getElementById('screen').innerHTML=input1;
}
/*getting first number */
else if (op.length===0 && input1.length>=0 && this.value !=="-"&&this.value !=="+" && this.value !=="*" && this.value !=="/"&&this.id!="c") {
  input1+=this.value;
  if(decimal.length<1&&this.value==="."){
  decimal.push(this.value);
  document.getElementById('screen').innerHTML+=this.value;
    }
  else{
    document.getElementById('screen').innerHTML=input1;
  }
}
/*grabing operator */
else if(op.length ===0)
{
  if(this.value ==="+" || this.value==="-" ||this.value ==="*" || this.value==="/"){
  op.push(this.value);
  document.getElementById('screen').innerHTML+=this.value;
}}
/*grabing second nuber if it is negativ imput*/
else if(op.length===1&&input2.length===0 && this.value==="-"){
  input2=this.value;
  document.getElementById('screen').innerHTML=input2;
}
else if (this.id!="equel"&&op.length===1 && input2.length>=0 && this.value !="-"&& this.value !="+" && this.value !="*" && this.value !="/") {
  input2+=this.value;
  if(decimal.length<2&&this.value==="."){
  decimal.push(this.value);
  document.getElementById('screen').innerHTML+=this.value;
  }
  else{
    document.getElementById('screen').innerHTML+=this.value;
  }
}/* grabing operator */
else if(this.id!="equel"&& op.length===1){
  if(this.value ==="-"||this.value ==="+" ||this.value ==="*"||this.value ==="/")
    {
  input1=Number(input1);
  input2=Number(input2);
  /* if next operator is lower lvl calculate 2 numbers*/
    switch (op[0]) {
      case "-":ans=input1-(input2);
        break;
        case "+":ans=input1+(input2);
          break;
          case "*":ans=input1*(input2);
            break;
            case "/":ans=Math.round(input1/(input2)*100000)/100000;
              break;
      default:
      ans="not number"
    }
    document.getElementById('screen').innerHTML=ans;
    console.log(ans);
    input1=ans;
    input2="";
    op[0]=this.value;
    document.getElementById('screen').innerHTML+=this.value;
    ans=[];
    decimal[1]=[];
    }
  }
else if (this.id=="equel") {
    input1=Number(input1);
    input2=Number(input2);
    switch (op[0]) {
      case "-":result=input1-(input2);
        break;
        case "+":result=input1+(input2);
          break;
          case "*":result=input1*(input2);
            break;
            case "/":result=Math.round(input1/(input2)*100000)/100000;
              break;
      default:
      result=[0];
    }
    document.getElementById('screen').innerHTML=result;
    input1=result;
    input2="";
    op=[];
    result=[];
    decimal[1]=[];
  }

}
