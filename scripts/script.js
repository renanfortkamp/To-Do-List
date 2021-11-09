
const todoList = [];

task.addEventListener('click', function(){
    let task = document.querySelector('input').value;
    todoList.push(task);
    createTask();
} 

)
const createTask = ()=>{
  document.querySelector('ul').innerHTML = ""  
  for(i=0 ; i < todoList.length; i++){
    let addTolist = document.querySelector('ul');
    let li = document.createElement('li');
    let taskValue = document.createTextNode(todoList[i]);
    li.appendChild(taskValue);
    addTolist.appendChild(li);    
    document.querySelector('input').value = "";
}  
}