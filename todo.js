let toDos = document.getElementById('toDos');
let list = document.getElementById('list');
let demoText = document.getElementById('demoText');
let inputText = document.getElementById('inputText');
let single = document.getElementById('single');

// Add list
function input() {
  if (inputText.value != '') {
    let listDiv = document.createElement('div');
    listDiv.innerHTML = list.innerHTML;
    toDos.appendChild(listDiv);
    demoText.innerText = inputText.value;
    inputText.value = '';
    single.style.display = 'block';
  }
}

// Edit button
function edit(event) {
  event.target.parentNode.parentNode.parentNode.demoText(event.target.parentNode.parentNode).innerText = 'Edited successfully!!'

  // demoText.innerText = 'Edited successfully!!'
}

// List bg change
function color() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  single.style.backgroundColor = "#" + randomColor;
  single.style.color = 'white';
}

// Remove item
function Close(event) {
  event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}
