let btnTT = document.getElementById("btnTT");
btnTT.onclick = function () {
    let tyle = document.getElementById("tyle").value * 1;
    let soTienDoi = document.getElementById("soTienDoi").value * 1;

    let result = tyle * soTienDoi;

    let output = `Tổng tiền là: ${result}`;

    let pInfo_3 = document.getElementById("pInfo_3");
    
    pInfo_3.innerHTML = output;

    console.log(output);

    pInfo_3.className = "info";





}
