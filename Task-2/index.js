/* funksiya yazırıq və bu funksiya bir number parameter qəbul edir. 
Daxil etdiyimiz parameter məsələn 50 (0-dan böyük 100ə qədər istınilən rəqəm ola bilər. not decimals.)dirsə,
1dən 50yə qədər rəqəmləri html-ə add edək. Əgər rəqəm tək rəqəmdirsə backgroundu yaşıl, 
cüt rəqəmdirsə backgroundu narıncı olsun.*/

function printNumb (num) {
   
    if(num>=100) {document.getElementById('output').innerText = "Enter a number till 100";}
     else{
        for (let i = 1; i <= num; i++) {
       
         let listNode=document.createElement("p"); 
         let txtNode=document.createTextNode(i);
         listNode.appendChild(txtNode);
         let element=document.getElementById('output');
         element.appendChild(listNode);  

         if(i % 2 === 0) {listNode.classList.add("orange")}
         else {listNode.classList.add("green")}
    }
      }
    }
    
printNumb(77);

