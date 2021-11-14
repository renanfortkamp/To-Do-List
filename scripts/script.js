let todoList = new Array();

addTask.addEventListener('click', function(){
  let task = document.querySelector('input').value;
  if(task == ""){
    } else{
    let task = document.querySelector('input').value;
    todoList.push({textTask:task,done:false});
    createList();
    saveStorage()
   }
  }
)

const createList = ()=>{
    document.querySelector('ul').innerHTML = "";
    document.querySelector('input').value = "";
  for(let i= 0 ; i < todoList.length; i++){
    const ul = document.querySelector('ul');
    const check = document.createElement('input');	
    const li = document.createElement('li');
    const label = document.createElement('label');
    const task = document.createTextNode(todoList[i].textTask);
    ul.appendChild(li);
    createCheckbox(li,check);
    li.appendChild(label); 
    label.appendChild(task);
    createDeleteTask(li,i);
    isChecked(i,check);
  }}

const createCheckbox = (li,check)=>{
  li.appendChild(check);
  check.type = 'checkbox';
  check.classList.add('checkbox')
  check.name = "checkbox"

}

const isChecked = (i,check)=>{
    if(todoList[i].done == true){
      check.checked = true;
      check.nextSibling.classList.add('checked')
    } else{
      check.checked = false;
      check.nextSibling.classList.remove('checked')
    };
  check.addEventListener('change', function(){
    if(this.checked){	
      check.nextSibling.classList.add('checked')
      todoList[i].done = true;
      saveStorage();
    }else{
      check.nextSibling.classList.remove('checked')
      todoList[i].done = false;
      saveStorage();
  }})
}

const createDeleteTask = (li,i) =>{
  const deleteTask = document.createElement('button');
  const excluir = document.createTextNode("X");
  li.appendChild(deleteTask);
  deleteTask.appendChild(excluir);
  deleteTask.name = "deleteTask"
  deleteTask.addEventListener('click', (i)=>{
      whishDelete(i);
    } 
  )
}

const whishDelete = (i) =>{
  let erase = window.confirm("Você deseja excluir ?");
  if(erase == true){
  todoList.splice(i,1);
  saveStorage();
  createList();
  }
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
    createList();
  }
}
loadStorage();

