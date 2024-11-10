const moveButton = document.getElementById('ko');

moveButton.addEventListener('click', () => {
  const maxX = window.innerWidth - moveButton.offsetWidth;
  const maxY = window.innerHeight - moveButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  moveButton.style.position = 'absolute';
  moveButton.style.left = randomX + 'px';
  moveButton.style.top = randomY + 'px';
});

const dy = document.getElementById('dy');
dy.onclick = function(){
    window.location.href = 'vao/trangdich.html';
}