let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div");
let underLine = document.getElementById("under-line");
let tabFirst = document.getElementById("all");
let mode = "all";

let taskList = [];
let filterList = [];
let list = [];

// Add date data
let today = new Date();
let year = today.getFullYear();
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let day = today.getDate();
let currentDate = `${year}.${month}.${day}`;

underLine.style.left = tabFirst.offsetLeft + "px";
underLine.style.width = tabFirst.offsetWidth + "px";

addButton.addEventListener("click", function(){
    if(taskInput.value === ""){
        alert("Please enter a task!");
        return;
    }
    addTask(); 
});
taskInput.addEventListener("focus", function(){
    taskInput.value = "";
});

taskInput.addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        if(taskInput.value.trim() !== "") {
            addTask();
        }
        taskInput.value = "";
    } 
});

for (let i = 1; i < tabs.length; i++){
    tabs[i].addEventListener("click", function(event){
        underLine.style.left = event.currentTarget.offsetLeft + "px";
        underLine.style.width = event.currentTarget.offsetWidth + "px";
        mode = event.target.id;
        render();
    });
}

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        date: currentDate,
        isComplete: false,
    };
    
    taskList.push(task);
    render();
}

function render(){
    let list = [];
    if(mode === "all"){
        list = taskList;
    } else if(mode === "ongoing"){
        list = taskList.filter((task) => task.isComplete === false);
    } else if(mode === "done"){
        list = taskList.filter((task) => task.isComplete === true);
    }

    let resultHTML = "";
    for(let i = 0; i < list.length; i++){   
        resultHTML += `<div class="task  ${list[i].isComplete === true ? 'task-done' : ''}">
                            <div class="check-button">
                                <button onClick="toggleComplete('${list[i].id}')"></button>
                            </div>
                            <div class="task-contain">
                                <div class="task-memo">
                                    ${list[i].taskContent}
                                    <span>${currentDate}</span>    
                                </div>
                                <div class="delete-button"> 
                                    <button onClick="deleteTask('${list[i].id}')"></button>
                                </div>
                            </div>
                        </div>`;
    }
    document.getElementById('task-board').innerHTML = resultHTML;
}

function toggleComplete(id){
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].id === id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
}

function deleteTask(id){
    if(confirm("Are you sure you want to delete?")){
        taskList = taskList.filter(item => item.id !== id);
    }
    render();
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}
