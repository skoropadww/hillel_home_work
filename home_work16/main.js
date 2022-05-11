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
const checkboxInput = document.querySelectorAll('.checkboxInput');

btnAdd.addEventListener('click', event => {
  if (inputTodo.value !== "") {
    todoItem.add({ description: `${inputTodo.value}`, done: false })
    
    printListTodoItems(todoItem, listTodo);
    inputTodo.value = "";

    
  } else {
    alert("Input field is empty");
  }

});


function printListTodoItems(param, plase) {
  let displayItem = '';
  for (let i = 0; i < param.items.length; i++) {
    displayItem += `
      <li>
        <label for="item_${i}">${todoItem.items[i].description}</label>
        <input class="checkboxInput" type="checkbox" name="" id="item_${i}" ${todoItem.items[i].done ? 'checked' : ''}  >
      </li>
    `;
    plase.innerHTML = displayItem;
  }
};

listTodo.addEventListener('change', (event)=>{
  let idInput = event.target.getAttribute('id');
  let forLable = listTodo.querySelector(`[for="${idInput}"]`);
  forLable.classList.toggle('_active');
});





