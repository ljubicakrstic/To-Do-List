
export const stavke = [
    {
        id: 0, 
        desc: "Operi sudove",
        done: false
    },
    {
        id: 1,
        desc: "Prosetaj psa",
        done: true
    },
    {
        id: 2, 
        desc: "Uradi domaci", 
        done: false
    },
    {
        id: 3, 
        desc: "Zovi keramicara", 
        done: true
    },
    {
        id: 4,
        desc: "Sredi kosu", 
        done: false
    }
];

export function add(novi){
    stavke.push(novi);
    
}

export function deleteItem(id){
    let index = stavke.findIndex(stavka => stavka.id == id);
    if(index == -1){
        return;
    }
    stavke.splice(index, 1);
    //console.log(stavke);

    // stavke = stavke.filter(el => el.id !== id);
    // console.log(stavke);
}


export function change(id, novi){
    let index = stavke.findIndex(stavka => stavka.id == id);
    if(index == -1){
        return;
    }
    stavke.splice(index, 1, novi);
    // console.log(stavke);
}

export function isValid(newItem){
    if(newItem.trim() == ""){
        return false;
    }else{
        return true;
    }
}

export function showError(){
    const errorPar = document.createElement("p");
    errorPar.textContent = "Unesite stavku";
    document.getElementById("input").appendChild(errorPar);
}

