const textBlock = document.querySelector('.clicker-box__number').innerText;
const boxButton = document.querySelectorAll('.clicker-box__button');

document.addEventListener('click', function (event) {
  event = event.target;
  if (event.classList.contains("increase")) {
    ++event.parentElement.querySelector("input").value;
  } else if (event.classList.contains("decrease")) {
    --event.parentElement.querySelector("input").value;
  } else if (event.classList.contains("reset")) {
    event.parentElement.querySelector("input").value = 0;
  }
})