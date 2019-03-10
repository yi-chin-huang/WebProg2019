// add a todo input
const input = document.getElementById('todo-input');

input.addEventListener('keyup', event => {
  if (event.code === 'Enter' && event.target.value !== '')  {
  	const newItem = addItem(event.target.value);
  	event.target.value = '';
  }
});


let itemcnt = 0;
let todoArr = [];

const todoList = document.getElementById('todo-list');

class ItemNode {
  constructor(node, id) {
    this.node = node;
    this.id = id;
    this.isComplete = false;
  }
}
//initial appearance
updateClear();
document.getElementById("state_all").style["border"] = "1px solid rgba(99, 99, 99, .4)";

function addItem(content)
{

	const itemNode = document.createElement("LI");
	itemNode.setAttribute("class", "todo-app__item");
	newItem = new ItemNode(itemNode, itemcnt);
	todoArr.push(newItem);

	const wrapper = document.createElement("DIV");
	wrapper.setAttribute("class", "todo-app__checkbox");

	const checkbox = document.createElement("INPUT");
	checkbox.setAttribute("id", itemcnt.toString());
	checkbox.setAttribute("onClick", "clickCheckbox(this)");
	checkbox.setAttribute("type", "checkbox");

	const label = document.createElement("LABEL");
	label.setAttribute("for", itemcnt.toString());

	const detail = document.createElement("H1");
	detail.setAttribute("class", "todo-app__item-detail");
	detail.innerHTML = content

	const imgX = document.createElement("img");
	imgX.setAttribute("class", "todo-app__item-x");
	imgX.setAttribute("onclick", "deleteItem(this.parentNode)")
	imgX.src = "./img/x.png"

	wrapper.appendChild(checkbox);
	wrapper.appendChild(label);
	itemNode.appendChild(wrapper);
	itemNode.appendChild(detail);
	itemNode.appendChild(imgX);
	todoList.appendChild(itemNode);

	updateActive();
	updateClear();
	itemcnt += 1;
	

}

// After clicking checkbox:

function clickCheckbox(e)
{
	pnode = e.parentNode.parentNode; //e: input, pnode: li (itemNode)
	text = pnode.getElementsByTagName('H1')[0];

	let tnode = todoArr.find(obj => {return obj.node === pnode});

	if(tnode.isComplete == false) 
	{
		tnode.isComplete = true;
		text.style["textDecoration"] = "line-through";
		text.style["opacity"] = 0.5;

	}
	else
	{
		tnode.isComplete = false;
		text.style["textDecoration"] = "none";
		text.style["opacity"] = 1;

	}
	

	updateActive();
	updateClear();

}

function deleteItem(e)
{
	// console.log(e);
	const itemNode = e;
	for (var i = todoArr.length - 1; i >= 0; i--) {
		if(todoArr[i].node === itemNode)
		{
			todoArr.splice(i,1);
			break;
		}	
	}

	itemNode.remove();
	updateActive();
	updateClear();

}

function updateActive()
{
	const activeCount = todoArr.filter(obj => {return obj.isComplete === false}).length;	
	actnode = document.getElementById("activeCount");
	actnode.innerHTML = activeCount + " Active";
	
}

function updateState(e)
{
	state = e.id;
	// stateButtons = e.parentNode;
	document.getElementById("state_active").style["border"] = "none";
	document.getElementById("state_completed").style["border"] = "none";
	document.getElementById("state_all").style["border"] = "none";
	e.style["border"] =  "1px solid rgba(99, 99, 99, .4)";
	allNodes = todoArr.map(obj => {return obj.node})
	allNodes.map(showItem);
	if(state === "state_active")
	{
		items = todoArr.filter(obj => {return obj.isComplete === true});
		itemNodes = items.map(obj => {return obj.node});
		itemNodes.map(hideItem);


	}
	else if (state === "state_completed")
	{
		items = todoArr.filter(obj => {return obj.isComplete === false});
		itemNodes = items.map(obj => {return obj.node});
		itemNodes.map(hideItem);
	}


}

function showItem(node)
{
	if(node != undefined)
	{
		node.style["display"] = "";
	}
	
}

function hideItem(node)
{

	if(node != undefined)
	{
		node.style["display"] = "none";
	}
}

function clearCompleted()
{
	items = todoArr.filter(obj => {return obj.isComplete === true});
	completedNodes = items.map(obj => {return obj.node});
	// console.log(completedNodes);
	completedNodes.map(deleteItem);
	updateActive();
	updateClear();
}

function updateClear()
{
	const completedExist = todoArr.some(obj => {return obj.isComplete === true});
	const node = document.getElementById("clear-completed");
	if(completedExist)
	{
		node.style["visibility"] =  "";
	}
	else
	{
		node.style["visibility"] =  "hidden";
	}

}
