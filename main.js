const container = document.querySelector(".container");

container.addEventListener(`click`, (event) => {
  const point = document.createElement(`div`);

  point.style.width = `10px`;
  point.style.height = `10px`;
  point.style.backgroundColor = `red`;
  point.style.borderRadius = `50%`;
  point.style.position = `absolute`;
  point.style.left = (event.clientX - container.offsetLeft) + `px`;
  point.style.top = (event.clientY - container.offsetTop) + `px`;

  point.classList.add(`point`);
  container.appendChild(point);
  console.log(event);
});
