
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
  for(let i= 0 ; i < todoList.length; i++){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const task = document.createTextNode(todoList[i]);
    ul.appendChild(li);
    createCheckbox(li)
    li.appendChild(task);
    createDeleteTask(li,i);
  }
}

const createCheckbox = (li)=>{
  const check = document.createElement('input');
  li.appendChild(check);
  check.type = 'checkbox';
  check.classList.add('checkbox')
  check.addEventListener('change', function(){
	if(this.checked){	
  	check.parentElement.classList.add('checked')
  }else{
	check.parentElement.classList.remove('checked')
  }})
  
}



const createDeleteTask = (li,i) =>{
  const deleteTask = document.createElement('button');
  const excluir = document.createTextNode("Excluir");
  li.appendChild(deleteTask);
  deleteTask.appendChild(excluir);
  deleteTask.addEventListener('click', ()=>{
      todoList.splice(i,1);
      createTask();
    } 
  )
}




/* retorna index -> todoList.indexOf(document.querySelector('li').innerText.slice(0,-7)) */