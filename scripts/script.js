
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
    let li = document.createElement('li');
    let check = document.createElement('input');
    let task = document.createTextNode(todoList[i]);
    let deleteTask = document.createElement('button');
    let x = document.createTextNode("Excluir");
    addTolist.appendChild(li);
      li.appendChild(check);
        check.type = 'checkbox'
        document.querySelector('li').children[0].class = 'check'
      li.appendChild(task);
      li.appendChild(deleteTask);
        deleteTask.appendChild(x);
        deleteTask.addEventListener('click', ()=>{
            todoList.splice(i,1);
            createTask();
          } 
        )
  }
}

