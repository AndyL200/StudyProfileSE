document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('input').addEventListener('keydown',(e)=>{
    if(e.key == 'Enter') {
        searchInput();
        console.log("Enter");
    }
});


async function fullHeight() {
    let documentHeight = await document.body.scrollHeight;
    let DHeight = document.getElementById('D');
    console.log(documentHeight);
    if(await DHeight) {
    document.body.style.height = documentHeight + 'px';
    DHeight.style.height = (documentHeight*0.90) + 'px';
}
else {
console.error("DHeight Error");
}
}


fullHeight();




const clsAlert = function() {
    // document.getElementById("customPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
const opnAlert = function() {
    // document.getElementById("customPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}


const searchInput = function() {
    document.getElementById("output").innerHTML = null;
   let req = document.getElementById("searchSub").value;
   search(req);
}

const search = function(req) {
    let output = document.getElementById("output");
    let max = 0;
    fetch("db.json").then(response => response.json()).then(data => {
        let n = 0;
        console.log(req);
        for(i = 0; i < data.length;i++) {
            if(req[n] == data[i].name[n]) {
                n+=1;
                i--;
                if(n>max) {max = n-1;}
            }
            else {
                n = 0;
            }
        }
        // console.log(max);
        // console.log(n);
       
            for(i = 0; i < data.length;i++) {
                // console.log(req[max]);
                // console.log(data[i].name[max]);

            if(req[max] == data[i].name[max] || req.length == 0) {
            console.log(data[i].name[n]);
            let contain = document.createElement('div');
            let curr = document.createElement("a");
            contain.id = "block" + i;
            contain.className = "studentOutput";
            curr.href="page1.html";
 
            let circ = document.createElement('div');
            circ.className = "circle";

            curr.innerHTML = `${data[i].name} ${data[i].Tnumber} ${data[i].email} ${data[i].degree}`;
            contain.appendChild(circ);
            contain.appendChild(curr);
            output.appendChild(contain); 
            }
        }
    }).catch(error => console.error("element not found", error));
   
    fullHeight();
}


});
// fetch("http://localhost:3000").then(response => response.json()).then(data => {
//     for(i = 0; i < data.length;i++) {
//         console.log(`${data[i].name} ${data[i].Tnumber} ${data[i].email} ${data[i].degree}`);
//     }
// });
