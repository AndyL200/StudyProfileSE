

let name, id, email, blahblah;

const st = (student) => {
    fetch("db.json").then(response => response.json()).then(data => {
        name = data.name;
        id = data.id;
        email = data.email;
        blahblah = data.blahblah;
    })

}