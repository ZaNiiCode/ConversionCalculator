var report9 = function (teaspoon, tablespoon) {
  document.getElementById("result9").innerHTML =
      teaspoon + "tsp = " + tablespoon + "tbsp";
};

document.getElementById("tsp_to_tbsp").onclick = function () {
  var tsp = document.getElementById("tsptbsp").value;
  report9(tsp, (tsp/3));
};

document.getElementById("tbsp_to_tsp").onclick = function () {
  var tbsp = document.getElementById("tsptbsp").value;
  report9((tbsp*3 ), tbsp);
};

var report10 = function (teaspoon, milliliters) {
  document.getElementById("result10").innerHTML =
      teaspoon + "tsp = " + milliliters + "Ml";
};

document.getElementById("Ml_to_tsp").onclick = function () {
  var Ml = document.getElementById("tspml").value;
  report10((Ml / 4.929), Ml);
};

document.getElementById("tsp_to_Ml").onclick = function () {
  var tsp = document.getElementById("tspml").value;
  report10(tsp, (tsp * 4.929));
};

var report12 = function (tablespoon, cups) {
  document.getElementById("result12").innerHTML =
      tablespoon + "tbsp = " + cups + "cups";
};

document.getElementById("cups_to_tbsp").onclick = function () {
  var cups = document.getElementById("tbspcups").value;
  report12((cups*16), cups);
};

document.getElementById("tbsp_to_cups").onclick = function () {
  var tbsp = document.getElementById("tbspcups").value;
  report12(tbsp, (tbsp/16));
};




var report13 = function (cup, quart) {
  document.getElementById("result13").innerHTML =
      cup + "cup = " + quart + "qut";
};

document.getElementById("qut_to_cup").onclick = function () {
  var qut = document.getElementById("cupqu").value;
  report13((qut*4), qut);
};

document.getElementById("cup_to_qut").onclick = function () {
  var cup = document.getElementById("cupqu").value;
  report13(cup,(cup/4));
};





var report14 = function (quart, pint) {
  document.getElementById("result14").innerHTML =
      quart + "qurt = " + pint + "pnt";
};

document.getElementById("qurt_to_pnt").onclick = function () {
  var qurt = document.getElementById("qurtpnt").value;
  report14((qurt/2), qurt);
};

document.getElementById("pnt_to_qurt").onclick = function () {
  var pnt = document.getElementById("qurtpnt").value;
  report14(pnt, (pnt*2));
};






var report15 = function (quart, gallon) {
  document.getElementById("result15").innerHTML =
      quart + "qurts = " + gallon + "gal";
};

document.getElementById("qurts_to_gal").onclick = function () {
  var qurts = document.getElementById("qurtgal").value;
  report15((qurts*4), qurts);
};

document.getElementById("gal_to_qurts").onclick = function () {
  var gal = document.getElementById("qurtgal").value;
  report15(gal, (gal/4));
};






var report16 = function (ounces, grams) {
  document.getElementById("result16").innerHTML =
      ounces + "oz = " + grams + "g";
};

document.getElementById("oz_to_g").onclick = function () {
  var oz = document.getElementById("ozg").value;
  report16((oz*28.35), oz);
};

document.getElementById("g_to_oz").onclick = function () {
  var g = document.getElementById("ozg").value;
  report16(g, (g/28.35));
};




var report17 = function (ounces, grams) {
  document.getElementById("result17").innerHTML =
      ounces + "oz = " + grams + "lb";
};

document.getElementById("oz_to_p").onclick = function () {
  var oz = document.getElementById("ozp").value;
  report17((oz*16), oz);
};

document.getElementById("p_to_oz").onclick = function () {
  var p = document.getElementById("ozp").value;
  report17(p, (p/16));
};
