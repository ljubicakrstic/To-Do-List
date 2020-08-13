import { stavke, deleteItem, add, isValid, showError } from "./todo.js";


 const app = document.getElementById("app");
 const addBtn = document.getElementById("add-btn")

 const renderAll = (stavke) => {
    app.innerHTML = "";
    stavke.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element.desc;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if(element.done == true){
            checkbox.checked = true;
        }


         checkbox.addEventListener("change", () => {
            element.done = !element.done;           
            renderAll(stavke);
         });


        const btnDelete = document.createElement("button");
        btnDelete.textContent = "DELETE";
        btnDelete.addEventListener("click", () => {
            deleteItem(element.id);
            renderAll(stavke);
        });

        if(element.done){
            p.style.textDecoration = "line-through";
        }
        p.appendChild(checkbox);
        app.appendChild(p);
        app.appendChild(btnDelete);
    });
 }

renderAll(stavke);

addBtn.addEventListener("click", () => {
    let desc = document.getElementById("new-item").value;
    if(isValid(desc)){
    let id = stavke.map(stavka => stavka.id).sort((a, b) => a -b).splice(-1, 1)[0] + 1;
    let novi = {id: id, desc: desc, done: false};
    add(novi);
    renderAll(stavke);
    document.getElementById("new-item").value = "";
    }else{
        showError();
    }
    
});
