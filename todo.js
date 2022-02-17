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

// color button
function color(event) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let bg = event.target.parentNode.parentNode;
  bg.style.backgroundColor = "#" + randomColor;
  bg.style.color = 'white';
}

/* // Edit button
let editBtn = document.getElementById('edit');
let saveBtn = document.getElementById('save');
function edit(event) {
  let newText = event.target.parentNode.parentNode.childNodes[3];
  newText.innerText = 'Test texts';
  let newInput = document.createElement("TEXTAREA");
  newText.append(newInput);
  editBtn.style.display = 'none';
  saveBtn.style.display = 'block';
  return newInput;
}

// Save edited
function save(event) {
  let newwText = event.target.parentNode.parentNode.childNodes[3];
  console.log(newwText);

  demoText.innerText = newwText.value;

} */

// Remove item
function Close(event) {
  event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}
