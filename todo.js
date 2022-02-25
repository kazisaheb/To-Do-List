let toDos = document.getElementById('toDos');
let list = document.getElementById('list');
let demoText = document.getElementById('demoText');
let inputText = document.getElementById('inputText');
let single = document.getElementById('single');
// Store
input = () => {
  if (inputText.value != '') {
    let listDiv = document.createElement('div');
    listDiv.classList.add('list')
    listDiv.innerHTML = `   
    <div id="single">
      <div class="options">
        <span onclick="Close(event)" id="cross">Close</span>
        <span onclick="color(event)" id="color">Color</span>
      </div>
      <p id="demoText">${inputText.value}</p>
    </div>
    `
    toDos.append(listDiv);
    inputText.value = '';
    localStorage.setItem('field', JSON.stringify(toDos.innerHTML));
  }
}
toDos.innerHTML = JSON.parse(localStorage.getItem('field'));
// color button
function color(event) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let bg = event.target.parentNode.parentNode;
  bg.style.backgroundColor = "#" + randomColor;
  bg.style.color = 'white';
  localStorage.setItem('field', JSON.stringify(toDos.innerHTML));
}
// Remove item
function Close(event) {
  event.target.parentNode.parentNode.parentNode.remove();
  localStorage.setItem('field', JSON.stringify(toDos.innerHTML));
}
// Clear All
clearAll = () => {
  localStorage.clear()
  toDos.innerHTML = ''
} 