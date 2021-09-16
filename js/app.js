addIdeaBtn = document.getElementById("addIdeaBtn");
displayTodo();
addIdeaBtn.addEventListener('click',function() {
    Todo = localStorage.getItem('todo');
    if(Todo==undefined || Todo==null||Todo == "[]"){
        todoList = [];
    } 
    else{
        todoList = JSON.parse(localStorage.getItem("todo"));
    }
    addTextTitle = document.getElementById("addTextTitle");
    addTextArea = document.getElementById("addTextArea");
    todoList.push([addTextTitle.value,addTextArea.value]);
    localStorage.setItem('todo',JSON.stringify(todoList));
    addTextTitle.value = '';
    addTextArea.value = '';
    displayTodo();
});

function displayTodo(){
    Todo = localStorage.getItem('todo');
    tableBody = document.getElementById("tableBody");
    if(Todo==undefined || Todo==null||Todo == "[]"){
        todoList = [];
        html='Nothing To Display!'
    } 
    else{
        todoList = JSON.parse(localStorage.getItem("todo"));
        html=''
    todoList.forEach(function(element,index) {
        html+=`<tr class="tableRow">
                    <th scope="row">${index+1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button id="${index}"class="btn mybtn" onclick='deleteRow(this.id)'>Delete</button></td>
                </tr>`
    });
    }
    
    
    tableBody.innerHTML = html;

}

function deleteRow(index){
    Todo = localStorage.getItem('todo');
    if(Todo==undefined || Todo==null||Todo == "[]"){
        todoList = [];
    } 
    else{
        todoList = JSON.parse(localStorage.getItem("todo"));
    }
    todoList.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(todoList));
    displayTodo();
}

searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input",function(){
    value = searchInput.value;
    tableBody = document.getElementById("tableBody");
    childrenOfTableBody = tableBody.children;
    temp = childrenOfTableBody[0].style.display;
    Array.from(childrenOfTableBody).forEach(function(element) {
        if(element.children[0].innerText.toLowerCase().includes(value)  || element.children[1].innerText.toLowerCase().includes(value)  || element.children[2].innerText.toLowerCase().includes(value)){
            element.style.display = "table-row";
        }
        else{
            element.style.display = 'none';
        }
    });
});