document.getElementById("setbtn").addEventListener("click", dataSet);
document.getElementById("getbtn").addEventListener("click", dataGet);
document.getElementById("clearbtn").addEventListener("click", dataClear);

function dataSet() {
  let myFnm = document.getElementById("fnm").value;
  let myLnm = document.getElementById("lnm").value;
  window.localStorage.setItem("firstName", myFnm);
  window.localStorage.setItem("lastName", myLnm);
  alert("Your data set in local storage");
}
function dataGet() {
  let firstnm = window.localStorage.getItem("firstName");
  let lastnm = window.localStorage.getItem("lastName");
  document.getElementById("ans").innerHTML =
    "Hi i am " + firstnm + " " + lastnm + " from bhopal";
}
function dataClear() {
  window.localStorage.clear();
  alert("Local storage clear!");
}
