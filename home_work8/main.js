const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const arrayForObject = [];

btn.addEventListener('click',()=>{
  const typeHome = prompt('Введите тип жилья например (дом или квартира)','');
  const totalArea = prompt('Введите общую квадратуру', '');
  const countRooms = prompt('Введите количество комнат', '');
  const bathroom = prompt('Санузел совмещен или раздельный', '');
  const availabilityTv = prompt('Санузел совмещен или раздельный', '');
  

  function Home(type, area, rooms, bathroom, tv) {
    this.type     = type;
    this.area     = area;
    this.rooms    = rooms;
    this.bathroom = bathroom;
    this.tv       = tv;

    return `type: ${this.type}, area: ${this.area}, rooms: ${this.rooms}, bathroom: ${this.bathroom}, tv: ${this.tv}`;
  }

  const myHome = new Home(typeHome, totalArea, countRooms, bathroom, availabilityTv);

  arrayForObject.push(myHome);

  if (list.children) {
    list.innerHTML = '';
    showTagsInHtml(arrayForObject, list)
  }else {
    showTagsInHtml(arrayForObject, list)
  }
})

function showTagsInHtml(array, innerBox) {
  array.forEach(element => {
    innerBox.insertAdjacentHTML('afterBegin', `<li class="list__item">Тип: ${element.type}, Общая площадь: ${element.type}, Количество комнат: ${element.rooms}, Ванная комната: ${element.bathroom}, Наличие ТВ: ${element.tv}</li>`);
  });
}