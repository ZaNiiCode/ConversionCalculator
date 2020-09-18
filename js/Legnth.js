var report3 = function (inches, foot) {
    document.getElementById("result3").innerHTML =
        inches + "in = " + foot + "ft";
};

document.getElementById("F_to_i").onclick = function () {
    var f = document.getElementById("inchFoot").value;
    report3((f * 12 ), f);
};

document.getElementById("i_to_F").onclick = function () {
    var i = document.getElementById("inchFoot").value;
    report3(i, (i / 12));
};

var report5 = function (inches, centimeter) {
    document.getElementById("result5").innerHTML =
        inches + "in = " + centimeter + "cm";
};

document.getElementById("C_to_i").onclick = function () {
    var C = document.getElementById("inchcent").value;
    report5((C / 2.54 ), C);
};

document.getElementById("i_to_C").onclick = function () {
    var i = document.getElementById("inchcent").value;
    report5(i, (i * 2.54));
};

var report6 = function (Miles, Foot) {
    document.getElementById("result6").innerHTML =
        Miles + "mi = " + Foot + "ft";
};

document.getElementById("FT_to_Mi").onclick = function () {
    var FT = document.getElementById("ftmi").value;
    report6((FT / 5280), FT);
};

document.getElementById("Mi_to_FT").onclick = function () {
    var Mi = document.getElementById("ftmi").value;
    report6(Mi, (Mi * 5280));
};

var report7 = function (Kilometer, Miles) {
    document.getElementById("result7").innerHTML =
        Kilometer + "km = " + Miles + "mi";
};

document.getElementById("MI_to_Km").onclick = function () {
    var MI = document.getElementById("mikm").value;
    report7((MI * 1.60934), MI);
};

document.getElementById("Km_to_MI").onclick = function () {
    var Km = document.getElementById("mikm").value;
    report7(Km, (Km / 1.60934));
};
