const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
const todoDone = document.getElementById('todoDone')

todoInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addInput();
    }
})

function addInput() {
    if(todoInput.value !== '') {
        const newLi = document.createElement('li');
        const completeBtn = document.createElement('button');

        newLi.textContent = todoInput.value;

        completeBtn.textContent = "완료";
        newLi.appendChild(completeBtn);

        todoList.appendChild(newLi);

        todoInput.value = "";

        completeBtn.addEventListener('click', function() {
            completeInput(newLi);
        })
    }
}

function completeInput(listItem){
    todoList.removeChild(listItem);//완료한 항목은 todoList에서 삭제
    listItem.removeChild(listItem.querySelector('button'))
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
  
    deleteBtn.addEventListener('click', function(){
      todoDone.removeChild(listItem);
    });
  
    listItem.appendChild(deleteBtn);
    todoDone.appendChild(listItem);
  }