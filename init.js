
const TaskList = document.querySelector('#tasks');
const form = document.querySelector('#add-task')
const coverImage = document.querySelector('#cover-image')

function renderTasks(doc) {
   let li = document.createElement('li');
   let title = document.createElement('span');

   li.setAttribute('doc-id', doc.id)
   title.textContent = doc.data().title;

   li.appendChild(title)

   TaskList.appendChild(li)
}

function displayCover(doc) {
  if(doc) {
      coverImage.style.display = 'none'
  }
}

db.collection('tasks').get().then((snapShot) => {
     snapShot.docs.forEach(doc => {
         renderTasks(doc)
         displayCover(doc)
     });
})

//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('tasks').add({
      title: form.title.value
    })
    form.title.value = '';
})