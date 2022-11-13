let arr = ['apple', 'banana', 'tomato',' orange ' ];
  
let list = document.getElementById("myList");
  
arr.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})




