let btnDtb = document.getElementById("btnDtb");
btnDtb.onclick = function () {
    let num_1 = document.getElementById("num_1").value * 1;
    let num_2 = document.getElementById("num_2").value * 1;
    let num_3 = document.getElementById("num_3").value * 1;
    let num_4 = document.getElementById("num_4").value * 1;
    let num_5 = document.getElementById("num_5").value * 1;
    

   

    let result = (num_1 + num_2 + num_3 +num_4 +num_5) / 5;

    let output = `Điểm Trung Bình là: ${result}`;

    let pInfo_2 = document.getElementById("pInfo_2");
    pInfo_2.innerHTML = output;

    console.log(output);

    pInfo_2.className = "info";





}
