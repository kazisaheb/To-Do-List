let toDos = document.getElementById('toDos');
let list = document.getElementById('list');
let demoText = document.getElementById('demoText');
let inputText = document.getElementById('inputText');

// Add list
function input() {
  if (inputText.value != '') {
    let listDiv = document.createElement('div');

    // listDiv.setAttribute('class', 'single')
    // listDiv.innerHTML = `
    // <p>Hello</p>
    //  <button>Add</button>
    // `
    // list.appendChild(listDiv)

    listDiv.innerHTML = list.innerHTML;
    toDos.appendChild(listDiv);
    demoText.innerText = inputText.value;
    inputText.value = '';
    single.style.display = 'block';
  }
}

// Edit button
let edit = document.getElementById('edit');
edit.addEventListener('click', function () {
  console.log('Edit clicked');
  demoText.innerText = 'Edited successfully!!'
})

// List bg change
let single = document.getElementById('single');
let color = document.getElementById('color');
color.addEventListener('click', function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  single.style.backgroundColor = "#" + randomColor;
  single.style.color = 'white';
})

// Remove item
let cross = document.getElementById('cross');
cross.addEventListener('click', function (event) {
  event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
})