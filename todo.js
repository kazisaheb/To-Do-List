let toDos = document.getElementById('toDos')
let list = document.getElementById('list')
let demoText = document.getElementById('demoText')
let inputText = document.getElementById('inputText')
let single = document.getElementById('single')
// Append
input = () => {
  if (inputText.value != '') {
    let listDiv = document.createElement('div')
    listDiv.classList.add('list')
    listDiv.innerHTML = `   
    <div id="single">
      <div class="options">
        <span onclick="remove(event)" id="cross">Remove</span>
        <span onclick="edit(event)" id="editBtn" class="editBtn">Edit</span>
        <span onclick="save()" id="saveBtn">Save</span>
        <span onclick="color(event)" id="color">Color</span>
      </div>
      <p id="demoText">${inputText.value}</p>
      <span id="dates">${new Date().toDateString()}, ${new Date().toLocaleTimeString()}</span>    
    </div>
    `
    toDos.append(listDiv)
    inputText.value = ''
    store()
  }
}
// LocalStorage function
store = () => localStorage.setItem('field', JSON.stringify(toDos.innerHTML))
toDos.innerHTML = JSON.parse(localStorage.getItem('field'))
// Color button
function color(event) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  let bg = event.target.parentNode.parentNode
  bg.style.backgroundColor = "#" + randomColor
  bg.style.color = 'white'
  store()
}
// Remove item
function remove(event) {
  event.target.parentNode.parentNode.parentNode.remove()
  store()
}
// Clear All
clearAll = () => {
  localStorage.clear()
  toDos.innerHTML = ''
}
// Edit Button finction
edit = (event) => {
  let theNote = event.target.parentNode.parentNode.childNodes[3]
  let newText = document.createElement('textarea')
  newText.classList.add('newText')
  newText.value = theNote.innerText
  theNote.innerText = ''
  theNote.append(newText)
  newText.focus()
  event.target.style.display = 'none'
  let saveBtn = event.target.nextElementSibling
  saveBtn.style.display = 'block'
  // Save button finction
  save = () => {
    theNote.innerText = newText.value
    newText.style.display = 'none'
    saveBtn.style.display = 'none'
    event.target.style.display = 'block'
    store()
  }
}