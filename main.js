
let taskclick = document.getElementById("task-click");
let taskitem = document.getElementById("task-item");
let itemlist=[];
let chklist=[];

taskclick.addEventListener("click",puttask);

function puttask() {

    let item = taskitem.value;
    let tasklist = {
        id : Math.random().toString(36).substring(2, 18),
        item : item,
        isComplete: false
    }

    itemlist.push(tasklist)

    render();
}

function render() {

    let putHtml='';
    for(let i=0; i < itemlist.length; i++){

        putHtml += `<div class="task-item${itemlist[i].isComplete}"><div>${itemlist[i].item}</div><div>
        <button onclick="checkitem('${itemlist[i].id}')">On Going</button>
        <button onclick="deleitem('${itemlist[i].id}')">Delete</button></div></div>`;
    }

    document.getElementById("putitem").innerHTML=putHtml;    
}

function checkitem(chkid) {

    for(let i=0; i < itemlist.length; i++){
        if(itemlist[i].id === chkid) {
            itemlist[i].isComplete = !itemlist[i].isComplete;
            chklist.push(itemlist[i]);
            break;
        }
    }

    render();
}

function deleitem(chkid) {
console.log(chkid)

    for(let i=0; i < itemlist.length; i++){
        if(itemlist[i].id === chkid) {
            itemlist.splice(i,1);
            break;
        }
    }

    render();
}
