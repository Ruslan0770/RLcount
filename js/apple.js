var button=document.getElementById('btn');
var button1=document.getElementById('btn1');
var button2=document.getElementById('btn2');
var count=1;
var p=document.getElementById('p');

button.onclick=function(){
    if(count>1){

        count--;
        p.innerHTML=count;
    }
    
    }
    button1.onclick=function(){
        count=1;
        p.innerHTML=count
    }
    button2.onclick=function(){
        count++;
        p.innerHTML=count
    }
    