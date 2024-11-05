





const clsAlert = function() {
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
const opnAlert = function() {
    document.getElementById("customAlert").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

const search = function() {
    let output = document.getElementById("output");
    fetch("db.json").then(response => response.json()).then(data => {
        for(i = 0; i < data.length;i++) {
            let curr = document.createElement("div");
            curr.classList.add("student");
            curr.id = "curr" + i;
            curr.innerHTML = `${data[i].name} ${data[i].Tnumber} ${data[i].email} ${data[i].degree}`;
            output.appendChild(curr); 
        }
    }).catch(error => console.error("element not found", error));
   

}