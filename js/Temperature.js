
var report2 = function (celsius, fahrenheit) {
  document.getElementById("result2").innerHTML =
      celsius + "C = " + fahrenheit + "F";
};
document.getElementById("f_to_c").onclick = function () {
  var f = document.getElementById("temperature").value;
  report2((f - 32) / 1.8, f);
};
document.getElementById("c_to_f").onclick = function () {
  var c = document.getElementById("temperature").value;
  report2(c, 1.8 * c + 32);
};



var report4 = function (celsius, kelvin) {
 document.getElementById("result4").innerHTML =
      celsius + "C = " + kelvin + "K";
};
document.getElementById("ke_to_ce").onclick = function () {
  var ke = document.getElementById("kelcel").value;
  report4((ke - 273.15), ke);
};
document.getElementById("ce_to_ke").onclick = function () {
  var ce = document.getElementById("kelcel").value;
  report4(ce, 273.15 + ce);
};


var report8 = function (fahrenheit, kelvin) {
document.getElementById("result8").innerHTML =
	fahrenheit + "F = " + kelvin + "K";
 };
 document.getElementById("Kelvin_to_Fahr").onclick = function () {
var Kelvin = document.getElementById("kelFah").value;
report8(((Kelvin - 273.15) * (9 / 5) + 32), Kelvin);
};
document.getElementById("Fahr_to_Kelvin").onclick = function () {
 var Fahr = document.getElementById("kelFah").value;
report8(Fahr, ((Fahr - 32)* (5/9) + 273.15));
};
