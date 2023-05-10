var a = new Date();
let hour = document.getElementsByClassName("hours")[0];
let minute = document.getElementsByClassName("minutes")[0];
let second = document.getElementsByClassName("seconds")[0];
hour.innerHTML = `${a.getHours()}`;
minute.innerHTML = `${a.getMinutes()}`;
second.innerHTML = `${a.getSeconds()}`;
setInterval(function () {
    hour.innerHTML = `${a.getHours()}`;
    let d = new Date();
    hour.innerHTML = `${d.getHours()}`;
}, 3600000);
setInterval(function () {
    let d = new Date();
    minute.innerHTML = `${d.getMinutes()}`;
}, 60000);
setInterval(function () {
    let d = new Date();
    second.innerHTML = `${d.getSeconds()}`;
}, 1000);