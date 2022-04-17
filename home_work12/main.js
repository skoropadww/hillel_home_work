class TodoList {
  items = [];

  add({id, title, description, done}){
    const newTodoItem = new TodoItem({id, title, description, done});
    this.items.push(newTodoItem);
  };

  completeAll(){
    this.items.forEach((item) => item.done = true);
  };

}

class TodoItem {
  constructor({id, title, description, done}) {
    this.id          = id;
    this.title       = title;
    this.description = description;
    this.done        = done;
  }
}


const todoItem = new TodoList();
todoItem.add({ id: 2, title: "Web site", description: "create", done: false});
todoItem.add({ id: 3, title: "Web shop", description: "project", done: false });
todoItem.add({ id: 4, title: "API", description: "develop", done: false });
todoItem.completeAll();
console.log(todoItem);




