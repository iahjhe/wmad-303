const nym = prompt("What is your name?");
document.getElementById("nameKdm").innerHTML = nym;

const color = prompt("What is your preferred background color?");
document.getElementById("nameKdm").style.color = color;


setInterval(() => {
    let n = (Math.random() * 0xffff * 10000).toString(16);
    n = '#'+ n.slice(0, 6);
    document.body.style.backgroundColor = n;
}, 1000)