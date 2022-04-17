class TodoList {
  items = [];

  add(id, title, description, done){
    const newTodoItem = new TodoItem(params);
    this.items.push(newTodoItem);
  };

  completeAll(){
    this.items.forEach((item) => item.done = true);
  };

}

class TodoItem {
  constructor(params) {
    this.id          = params.id;
    this.title       = params.title;
    this.description = params.description;
    this.done        = params.done;
  }
}


const todoItem = new TodoList();
todoItem.add({ id: 2, title: "Web site", description: "create", done: false});
todoItem.add({ id: 3, title: "Web shop", description: "project", done: false });
todoItem.add({ id: 4, title: "API", description: "develop", done: false });

console.log(todoItem);




