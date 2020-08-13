import { stavke, deleteItem } from "./todo.js";


 const app = document.getElementById("app");

 const renderAll = (stavke) => {
    app.innerHTML = "";
    stavke.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element.desc;
        p.addEventListener("click", () => {
            // change(element.id, {id: element.id, desc: element.desc, done: !element.done});
            //change(element.id, {...element, done: !element.done});
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
        
        app.appendChild(p);
        app.appendChild(btnDelete);
    });
 }

renderAll(stavke);

 
