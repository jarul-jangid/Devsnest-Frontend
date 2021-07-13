let addToDobutton = document.getElementById("addToDo");

let toDoContainer = document.getElementById("Todo-container");

let inputField = document.getElementById("inputField");

addToDobutton.addEventListener("click", () => {
    var para = document.createElement("p");
    // para.setAttribute("type", "radio");
    para.classList.add("paragraph")
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener("click", function() {
        para.style.textDecoration = "line-through";
    })

    para.addEventListener("dblclick", function(){
        toDoContainer.removeChild(para);
    })
})
