
const todoList = [];

addTask.addEventListener('click', function(){
  let task = document.querySelector('input').value;
  if(task == ""){
    alert("Insira uma tarefa!")
  } else{
    let task = document.querySelector('input').value;
    todoList.push(task);
    createTask();
   }
  }
)

const createTask = ()=>{
    document.querySelector('ul').innerHTML = "";
    document.querySelector('input').value = "";
  for(let i=0 ; i < todoList.length; i++){
    let addTolist = document.querySelector('ul');
    let task = document.createTextNode(todoList[i]);
    let li = document.createElement('li');
    li.appendChild(task);
    addTolist.appendChild(li);
    let deleteTask = document.createElement('span');
    let x = document.createTextNode("X");
    deleteTask.appendChild(x);
    li.appendChild(deleteTask);
    deleteTask.addEventListener('click', ()=>{
        todoList.splice(i,1);
        createTask();
      } 
    )
  }
}  