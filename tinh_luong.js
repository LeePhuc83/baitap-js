/**
 **Dau vao
 -tao bien luongNgay va gan gia tri la 100000
 -tao bien soNgayLam va cho phep user nhap
 **Xu ly
 -tao bien tongTien va gan gia tri la 0
 -tongTien duoc gia tri moi la luongNgay * soNgayLam
 **Dau ra
 -In ra tongTien(log)
 */



let btnClick = document.getElementById("btnClick");
btnClick.onclick = function () {
    let luongNgay = document.getElementById("luongNgay").value * 1;
    let soNgayLam = document.getElementById("soNgayLam").value * 1;

    let result = luongNgay * soNgayLam;

    let output = `Tổng tiền là: ${result}`;

    let pInfo_1 = document.getElementById("pInfo_1");
    pInfo_1.innerHTML = output;

    console.log(output);

    pInfo_1.className = "info";

   

    

}



