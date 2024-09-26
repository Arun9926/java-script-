document.getElementById("Setbtn").addEventListener("click", dataSet);
document.getElementById("Getbtn").addEventListener("click", dataGet);
document.getElementById("Clearbtn").addEventListener("click", dataClear);

function dataSet() {
  let myFnm = document.getElementById("fnm").value;
  let myLnm = document.getElementById("lnm").value;
  window.localStorage.setItem("firstName", myFnm);
  window.localStorage.setItem("lastName", myLnm);
  alert("Your data set in local storage");
}
function dataGet() {
  let firstnm = document.getElementById("firstName");
  let lastnm = document.getElementById("lastName");
  document.getElementById("ans").innerHTML =
    "Hi i am " + firstnm + " " + lastnm + " from bhopal";
}
function dataClear() {
  window.localStorage.clear();
  alert("Local storage clear!");
}
