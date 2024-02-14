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

    if (mode === "all") {
        list = itemlist;
    } else if (mode === "ongoing") {
        list = itemlist.filter((task) => task.isComplete === false);
    } else if (mode === "done") {
        list = itemlist.filter((task) => task.isComplete === true);
    }

    let putHtml='';
    for(let i=0; i < list.length; i++){
        let taskStyle = `style="background-color: ${list[i].color};"`;
        if(list[i].isComplete === false) {
            putHtml += `<div class="task-itemfalse" ${taskStyle}><div>${list[i].item}</div><div>
            <button onclick="checkitem('${list[i].id}')"><i class="fa-solid fa-check"></i></button>
            <button onclick="deleitem('${list[i].id}')"><i class="fa-solid fa-trash"></i></button></div></div>`;
        } else if(list[i].isComplete === true) {
            putHtml += `<div class="task-itemtrue"><div>${list[i].item}</div><div>
            <button onclick="checkitem('${list[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
            <button onclick="deleitem('${list[i].id}')"><i class="fa-solid fa-trash"></i></button></div></div>`;            
        }
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
