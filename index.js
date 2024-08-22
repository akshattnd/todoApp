let creatDiv = (value) => {
    let div = document.createElement("div");
    div.classList.add("checklist-child");
    let img = document.createElement("img");
    let p = document.createElement("p");
    p.classList.add("task");
    img.classList.add("unchecked");
    img.src = "/attachment/images/unchecked.png";
    p.innerText = value;
    let btn = document.createElement("button");
    btn.innerText = "x";
    btn.classList.add("del");
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(btn);
    return div;
}
let todoList = document.querySelector(".checklist");
let btn = document.querySelector(".addbtn");
btn.addEventListener("click", () => {
    let input = document.querySelector("input");
    if (input.value != "") {
        let div = creatDiv(input.value);
        todoList.appendChild(div);
    }
    saveData();

});
// del and other done
todoList.addEventListener("click", (event) => {
    let btn = document.createElement("button");
    btn.innerText = "x";
    btn.classList.add("del");
    if (event.target.getAttribute("class") == "del") {
        event.target.parentElement.remove();
    } else if (event.target.getAttribute("class") == "unchecked") {
        if (event.target.getAttribute("src") == "/attachment/images/checked.png") {
            event.target.setAttribute("src", "/attachment/images/unchecked.png");
        } else {
            event.target.setAttribute("src", "/attachment/images/checked.png");
        }
        event.target.nextElementSibling.classList.toggle("line");
    }
    saveData();

});
function saveData(){
        localStorage.setItem("data",todoList.innerHTML);
}

let showData = ()=>{
    todoList.innerHTML = localStorage.getItem("data");
}
showData();