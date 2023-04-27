
let input=document.getElementById("inputVal");
let list=document.getElementById("list");
let btnAdd=document.getElementById("addButton");
let btnCount=document.getElementById("countButton");
let btnDisplay=document.getElementById("displayButton");


btnAdd.addEventListener("click", addFruit);
btnCount.addEventListener("click", countFruit);

function addFruit (){
    inputValue=input.value;
    if(inputValue){
    liNode=document.createElement("li");
    txtNode=document.createTextNode(inputValue);
    liNode.appendChild(txtNode);
    list.appendChild(liNode);}
}

function countFruit (){
    var listItems = document.getElementsByTagName("li");
    var count = listItems.length;
    document.getElementById('result').innerHTML = `Count of fruits: ${count}`;
   
}

btnDisplay.addEventListener("click", myFunction);
function myFunction() {
    
    if (list.style.display === "none") {
    list.style.display = "block";
    btnDisplay.innerText="HIDE";
    } else {
      list.style.display = "none";
      btnDisplay.innerText="SHOW";

    }
  }