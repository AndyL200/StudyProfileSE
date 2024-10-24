const clsAlert = function() {
    document.getElementById(".customAlert").style.display = "none";
    document.getElementById(".overlay").style.display = "none";
}
const opnAlert = function() {
    document.getElementById(".customAlert").style.display = "block";
    document.getElementById(".overlay").style.display = "block";
}

const search = function() {
    const output = document.getElementsByClassName(".output")
    fetch("db.json").then(response => response.json()).then(data => {
        for(i = 0; i < x.length;i++) {
            const curr = document.createElement("div")
            curr.id = "curr" + i;
            curr.append(data[i].name)
            curr.append(data[i].Tnumber)
            curr.append(data[i].email)
            curr.append(data[i].degree)
            output.append(curr);
        }
    }).catch(error => console.error("element not found", error));
   

}