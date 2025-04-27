let btnHcn = document.getElementById("btnHcn");
btnHcn.onclick = function () {
    let dai = document.getElementById("dai").value * 1;
    let rong = document.getElementById("rong").value * 1;

    let result = dai * rong;

    let output = `diện tích là: ${result}`;

    let pInfo_4 = document.getElementById("pInfo_4");
    pInfo_4.innerHTML = output;

    console.log(output);

    pInfo_4.className = "info";





}
let btnCv = document.getElementById("btnCv");
btnCv.onclick = function () {
    let dai = document.getElementById("dai").value * 1;
    let rong = document.getElementById("rong").value * 1;

    let result = (dai + rong) / 2;

    let output = `chu vi là: ${result}`;

    let pInfo_4 = document.getElementById("pInfo_4");
    pInfo_4.innerHTML = output;

    console.log(output);

    pInfo_4.className = "info";





}
