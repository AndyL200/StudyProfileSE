

let name, id, email, blahblah;

const st = (student) => {
    fetch("http://localhost:3000").then(response => response.json()).then(data => {
        name = data.name;
        id = data.id;
        email = data.email;
        blahblah = data.blahblah;
    })

}