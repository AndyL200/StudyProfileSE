
const clsAlert = function() {
    document.getElementById("customPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
const opnAlert = function() {
    document.getElementById("customPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

const search = function() {
    let output = document.getElementById("output");
    fetch("db.json").then(response => response.json()).then(data => {
        for(i = 0; i < data.length;i++) {
            let curr = document.createElement("div");
            curr.id = "curr" + i;
            curr.innerHTML = `${data[i].name} ${data[i].Tnumber} ${data[i].email} ${data[i].degree}`;
            output.appendChild(curr); 
        }
    }).catch(error => console.error("element not found", error));
   

}

// fetch("http://localhost:3000").then(response => response.json()).then(data => {
//     for(i = 0; i < data.length;i++) {
//         console.log(`${data[i].name} ${data[i].Tnumber} ${data[i].email} ${data[i].degree}`);
//     }
// });
