class TodoList {
  items = [];

  add({ description, done}){
    const newTodoItem = new TodoItem({ description, done});
    this.items.push(newTodoItem);
  };


  completeAll(){
    this.items.forEach((item) => item.done = true);
  };

}

class TodoItem {
  constructor({ description, done}) {
    this.description = description;
    this.done        = done;
  }
}



const todoItem = new TodoList();


const inputTodo     = document.querySelector('.todo-block__input');
const btnAdd        = document.querySelector('.todo-block__btn');
const listTodo      = document.querySelector('.todo-block__list');
const checkbox      = document.querySelectorAll('input[type="checkbox"]')


btnAdd.addEventListener('click', event => {
  if (inputTodo.value !== "") {
    todoItem.add({ description: `${inputTodo.value}`, done: false })
    
    
    printListTodoItems(todoItem, listTodo);

    if (checkbox === true) {
      for (let i = 0; i < checkbox.length; i++) {
        const element = checkbox[i];
        console.log(element);
      }
    }

    inputTodo.value = "";

  } else {
    alert("Input field is empty");
  }

});


function printListTodoItems(param, plase) {
  plase.innerHTML = '';

  for (let i = 0; i < param.items.length; i++) { 
    let result = createListItem(i, todoItem.items[i].description, plase)
    plase.insertAdjacentHTML('afterbegin', result);
  }
};

function createListItem(id, desc, plase) {
  const liItem = document.createElement('li');
  const inputChek = document.createElement('input');
  const labelItem = document.createElement('label');

  inputChek.id  = id;
  inputChek.setAttribute("type", "checkbox");
  labelItem.setAttribute("for", id);
  labelItem.innerHTML = desc;

  liItem.appendChild(labelItem);
  liItem.appendChild(inputChek);

  inputChek.addEventListener('change', (event) => {
    let idInput = event.target.getAttribute('id');
    let forLable = listTodo.querySelector(`[for="${idInput}"]`);
    forLable.classList.toggle('_active');
  });

  let result = plase.appendChild(liItem);
  return result;
}





