const wrapper = document.querySelector('.wrapper'); 

class ShoppingList { 
  constructor(titleList, author) { 
    this.titleList = titleList, 
    this.author = author, 
    this.maxElements = 5, 
    this.list = []
  } 
  
  addItem(id, title, total, unit) { 
    if (Object.values({ id, title, total, unit }).some(item => item === undefined)) { 
      throw new Error(`Не добавлено. Причина: Добавляете пустой обьект`); 
    } 
    
    if (total === '') { 
      throw new Error(`${ title }: ${ unit }. - Не добавлено. Причина: Отсутсвует количество товара!`); 
    } 
    
    if (this.list.length >= this.maxElements) { 
      throw new Error(`Не добавлено. Причина: нельзя добавить больше ${ this.maxElements } товаров`); 
    } 
    if (!this.list.some(item => item.id === id)) { 
      this.list.push(new ShoppingItem(id, title, total, unit)); 
    } 
  } 
    
  removeItem(id) { 
    if (this.list.find(item => item.id === id)) { 
      let delItem = this.list.find(item => item.id === id); 
      const delBlock = document.createElement('div'); 
      delBlock.classList.add('list'); 

      delBlock.style.backgroundColor = '#f3de94';
      delBlock.style.padding = '15px';
      delBlock.style.border = 'thick solid #e3b847'; 
      delBlock.style.borderRadius = "15px";

      delBlock.textContent = `${ delItem.title }: ${ delItem.total } ${ delItem.unit }.- успешно удалено. id обьекта ${ id }`; wrapper.after(delBlock); 
      this.list = this.list.filter(item => item.id !== id); 
    } else 
      throw new Error(`Не удалено!. Причина: Товар с id обьектом ${ id } не найден в списке`); 
  } 

  iteratorMethod(){
    let inIteration = true;
    const iterator = this.list[Symbol.iterator]();

    while (inIteration){
      const {value, done} = iterator.next();
      inIteration = !done;
      console.log(value);
    }
  }
}
 
 
  class ShoppingItem { 
    constructor(id, title, total, unit) { 
      this.id = id, 
      this.title = title, 
      this.total = total, 
      this.unit = unit 
    } 
  } 
  
  
let listItem = new ShoppingList("Виталий", "Товары"); 
  
function printList() { 
  let err = document.createElement('div'); 
    
  try { 

    // listItem.addItem(1, "Печенье", "500", "г."); 
    // listItem.addItem(2, "Вода", "2", "л."); 
    // listItem.addItem(3, "Сахар", "1", "кг."); 
    // listItem.addItem(5, "Кофе", "200", "г."); 
    // listItem.removeItem(1); 
    // listItem.removeItem(3);
    // listItem.addItem(4, "Кола", "", "л.");  
    // listItem.addItem();

  } catch (error) { 
    console.log(error); 
    err.classList.add('list'); 

    err.style.backgroundColor = '#f39494'; 
    err.style.padding = '15px';
    err.style.border = 'thick solid #ae5d5d';
    err.style.borderRadius = "15px"; 

    err.textContent = error.message; 
  } finally { 
    listItem.list.forEach(item => { 
      let element = document.createElement('div'); 
      element.classList.add('list'); 

      element.style.backgroundColor = '#a1f394';
      element.style.padding = '15px';
      element.style.border = 'thick solid #68ae5d';
      element.style.borderRadius = "15px";

      wrapper.append(element); 
      element.textContent = `${item.title}: ${item.total} ${item.unit}. - успешно добавлено. id обьекта ${item.id}`}); 
      wrapper.append(err); 
      console.log(listItem.list); 
  } 
} 

printList();

function printConsoleList() {
  let listIter = new ShoppingList("Виталий", "Товары"); 

  listIter.addItem(1, "Печенье", "500", "г.");
  listIter.addItem(2, "Вода", "2", "л.");
  listIter.addItem(3, "Сахар", "1", "кг.");
  listIter.addItem(4, "Кофе", "200", "г."); 


  console.log("while in console -----------");
  listIter.iteratorMethod();
 
  console.log("For of in console -----------");
  for (const iterator of listIter.list) {
    console.log(iterator);
  }
}

printConsoleList();

