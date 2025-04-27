let btnTongg = document.getElementById("btnTongg");
btnTongg.onclick = function () {
    let soNguyen = document.getElementById("soNguyen").value * 1;
    let soHangChuc = document.getElementById("soHangChuc").value * 1;
    let soHangDonVi = document.getElementById("soHangDonVi").value * 1;

    let result = soHangChuc + soHangDonVi;

    let output = `Tổng là: ${result}`;

    let pInfo_5 = document.getElementById("pInfo_5");
    pInfo_5.innerHTML = output;

    console.log(output);

    pInfo_5.className = "info";





}
