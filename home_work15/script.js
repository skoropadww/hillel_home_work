const contentBlock = document.querySelector('.content');

const title =  document.createElement('h1');
const block =  document.createElement('p');
const input =  document.createElement('input');
const btn   =  document.createElement('button');

title.innerText = "Скоропад Виталий Викторович";
block.innerText = "Задача: создать страницу с элементами <h1>, <p>, <input> и <button> без использования html, а лишь используя методы объекта window.document. В заголовке <h1> должны быть ваше имя и фамилия, в <p> - текст задания, которое вы сейчас выполняете. В <input> можно что-то ввести, если нажать на кнопку то будет выведен alert c введенным в поле значением и после закрытия alert'а поле будет очищаться."
btn.innerText = "Выполнить";


contentBlock.appendChild(title);
contentBlock.appendChild(block);
contentBlock.appendChild(input);
contentBlock.appendChild(btn);

btn.addEventListener('click', (event)=>{
  alert(`${input.value}`);
  input.value = "";
})
