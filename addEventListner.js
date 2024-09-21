// document.getElementById("btn1").addEventListener("click", myfun);
// function myfun() {
//   alert("wellcome to cybrom");
// }
document.getElementById("btn1").addEventListener("click", calculat);
function calculat() {
  let phy = Number(document.getElementById("phy").value);
  let che = Number(document.getElementById("che").value);
  let math = Number(document.getElementById("math").value);
  let eng = Number(document.getElementById("eng").value);
  let hnd = Number(document.getElementById("hnd").value);
  let totalMarks = phy + che + math + eng + hnd;
  let percentage = (totalMarks * 100) / 500;
  document.getElementById("ans1").innerHTML = "Total Marks : " + totalMarks;
  document.getElementById("ans2").innerHTML =
    "Percentage : " + percentage + "%";
}
