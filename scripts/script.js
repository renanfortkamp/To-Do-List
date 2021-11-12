let todoList = new Array();

addTask.addEventListener('click', function(){
  let task = document.querySelector('input').value;
  if(task == ""){
    } else{
    let task = document.querySelector('input').value;
    todoList.push({textTask:task,done:false});
    createTask();
    saveStorage()
   }
  }
)

const createTask = ()=>{
    document.querySelector('ul').innerHTML = "";
    document.querySelector('input').value = "";
  for(let i= 0 ; i < todoList.length; i++){
    const ul = document.querySelector('ul');
    const div = document.createElement('div');	
    const li = document.createElement('li');
    const task = document.createTextNode(todoList[i].textTask);
    ul.appendChild(div);
    div.appendChild(li);
    createCheckbox(li,i)
    li.appendChild(task);
    createDeleteTask(div,i);
  }}


const createCheckbox = (li,i)=>{
  const check = document.createElement('input');
  li.appendChild(check);
  check.type = 'checkbox';
  check.classList.add('checkbox')
    if(todoList[i].done == true){
      check.checked = true;
      check.parentElement.classList.add('checked')
    } else{
      check.checked = false;
      check.parentElement.classList.remove('checked')
    };
  check.addEventListener('change', function(){
    if(this.checked){	
      check.parentElement.classList.add('checked')
      todoList[i].done = true;
      saveStorage();
    }else{
      check.parentElement.classList.remove('checked')
      todoList[i].done = false;
      saveStorage();
    }})
}

const createDeleteTask = (div,i) =>{
  const deleteTask = document.createElement('button');
  const excluir = document.createTextNode("X");
  div.appendChild(deleteTask);
  deleteTask.appendChild(excluir);
  deleteTask.addEventListener('click', ()=>{
      todoList.splice(i,1);
      saveStorage();
      createTask();
    } 
  )
}

const saveStorage = () =>{
  localStorage.removeItem('todoList')
  let list = JSON.stringify(todoList);
  localStorage.setItem('todoList', list)
}

const loadStorage = () =>{
  const local_storage = JSON.parse(localStorage.getItem('todoList'));
  if(local_storage != null){
    const local_storage = JSON.parse(localStorage.getItem('todoList'));
    todoList = local_storage
    createTask();
  }
}
loadStorage();