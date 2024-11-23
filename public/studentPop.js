document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('h1').innerHTML = sessionStorage.getItem('name');
    document.getElementById('stEmail').innerHTML = sessionStorage.getItem('email');
    document.getElementById('stNum').innerHTML = sessionStorage.getItem('Tnum');
    document.getElementById('stSomething').innerHTML = sessionStorage.getItem('degree');
})