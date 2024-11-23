// import st from './webChange'
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('input').addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            searchInput();
            console.log("Enter");
        }
    });




    document.getElementById('output').addEventListener('click', (e) => {
        if (e.target && e.target.tagName == 'A') {
            let student = e.target.textContent; //studentOutput child that is clicked
            let tags = student.split(',');

            window.sessionStorage.setItem('name', tags[0]);
            window.sessionStorage.setItem('Tnum', tags[1]);
            window.sessionStorage.setItem('email', tags[2]);
            window.sessionStorage.setItem('degree', tags[3]);
            window.loacation.assign("studentInfo.html");

        }

    })



    const clsAlert = function () {
        // document.getElementById("customPopup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
    const opnAlert = function () {
        // document.getElementById("customPopup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }


    const searchInput = function () {
        document.getElementById("output").innerHTML = null;
        let req = document.getElementById("searchSub").value;
        search(req);
    }

    const search = function (req) {
        let output = document.getElementById("output");
        let max = 0;
        fetch("db.json").then(response => response.json()).then(data => {
            let n = 0;
            console.log(req);
            req = req.toUpperCase();

            for (i = 0; i < data.length; i++) {
                data[i].name = data[i].name.toUpperCase();

                while (req[n] == data[i].name[n] && n < data[i].name.length) {
                    n = n + 1;
                    if (n > max) { max = n - 1; }
                }
            }
            // console.log(max);
            // console.log(n);

            for (i = 0; i < data.length; i++) {
                // console.log(req[max]);
                // console.log(data[i].name[max]);
                same = true;
                for (j = 0; j < max; j++) {
                    if (req[j] != data[i].name[j]) {
                        same = false;
                    }
                }
                if (same || req.length == 0) {
                    // console.log(data[i].name[n]);
                    let contain = document.createElement('div');
                    let curr = document.createElement("a");
                    contain.id = "block" + i;
                    contain.className = "studentOutput";
                    curr.href = "studentInfo.html";

                    let circ = document.createElement('div');
                    circ.className = "circle";

                    curr.innerHTML = `${data[i].name}` + "," + `${data[i].Tnumber}` + "," + `${data[i].email}` + "," + `${data[i].degree}`;
                    contain.appendChild(circ);
                    contain.appendChild(curr);
                    output.appendChild(contain);
                }
            }
        }).catch(error => console.error("element not found", error));


    }


});
// fetch("http://localhost:3000").then(response => response.json()).then(data => {
//     for(i = 0; i < data.length;i++) {
//         console.log(`${data[i].name} ${data[i].Tnumber} ${data[i].email} ${data[i].degree}`);
//     }
// });
