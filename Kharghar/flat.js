var sectorNo, carpetArea, area, ghasara, floorNumber, resiValue, landValue, applicableRate, floorRise, ghasaraFall, totalVal;

var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var monthShort = today.toLocaleString('default', { month: 'short' });
var year = today.getFullYear();
var currentDate = `${day} ${monthShort}. ${year}`;

function stamp() {
  //Hide & Seek
  document.getElementById("valform").style.display = "none"; document.getElementById("sharableDiv").style.display = "block";
  document.getElementById("share").style.display = "inline-block";  document.getElementById("showStampDuty").style.display = "inline-block";

  // Get form values
  sectorNo = document.querySelector("select[name='sector']").value;
  carpetArea = document.querySelector("input[name='area']").value;
  area = parseFloat(carpetArea * 1.2).toFixed(2);
  ghasara = document.querySelector("input[name='depghas']").value;
  floorNumber = document.querySelector("input[name='floor']").value;
// Sector wise values
if (sectorNo == 1) {
    resiValue = 88700;
    landValue = 40500;
}
else if (sectorNo == 2) {
    resiValue = 121800;
    landValue = 45100;
}
else if (sectorNo == 3) {
    resiValue = 92300;
    landValue = 35500;
}
else if (sectorNo == 4) {
    resiValue = 112300;
    landValue = 42300;
}
else if (sectorNo == 5) {
    resiValue = 120200;
    landValue = 45700;
}
else if (sectorNo == 6) {
    resiValue = 135400;
    landValue = 53900;
}
else if (sectorNo == 7) {
    resiValue = 126800;
    landValue = 48600;
}
else if (sectorNo == 8) {
    resiValue = 118600;
    landValue = 46900;
}
else if (sectorNo == 9) {
    resiValue = 90200;
    landValue = 43900;
}
else if (sectorNo == 10) {
    resiValue = 108700;
    landValue = 45400;
}
else if (sectorNo == 11) {
    resiValue = 112800;
    landValue = 42500;
}
else if (sectorNo == 12) {
    resiValue = 117600;
    landValue = 48900;
}
else if (sectorNo == 13) {
    resiValue = 86800;
    landValue = 32700;
}
else if (sectorNo == 14) {
    resiValue = 110300;
    landValue = 39300;
}
else if (sectorNo == 15) {
    resiValue = 106300;
    landValue = 42400;
}
else if (sectorNo == 16) {
    resiValue = 81500;
    landValue = 24600;
}
else if (sectorNo == 17) {
    resiValue = 78600;
    landValue = 24400;
}
else if (sectorNo == 18) {
    resiValue = 100200;
    landValue = 32000;
}
else if (sectorNo == 19) {
    resiValue = 111900;
    landValue = 44900;
}
else if (sectorNo == 20) {
    resiValue = 107100;
    landValue = 44400;
}
else if (sectorNo == 21) {
    resiValue = 100500;
    landValue = 45600;
}
else if (sectorNo == 22) {
    resiValue = 49300;
    landValue = 15700;
}
else if (sectorNo == 23) {
    resiValue = 80000;
    landValue = 28100;
}
else if (sectorNo == 24) {
    resiValue = 62400;
    landValue = 30300;
}
else if (sectorNo == 25) {
    resiValue = 57200;
    landValue = 23200;
}
else if (sectorNo == 26) {
    resiValue = 45900;
    landValue = 17000;
}
else if (sectorNo == 27) {
    resiValue = 98800;
    landValue = 42000;
}
else if (sectorNo == 28) {
    resiValue = 68700;
    landValue = 31000;
}
else if (sectorNo == 29) {
    resiValue = 64900;
    landValue = 29000;
}
else if (sectorNo == 30) {
    resiValue = 79900;
    landValue = 31000;
}
else if (sectorNo == 31) {
    resiValue = 80200;
    landValue = 30700;
}
else if (sectorNo == 32) {
    resiValue = 81000;
    landValue = 30700;
}
else if (sectorNo == 33) {
    resiValue = 81000;
    landValue = 30700;
}
else if (sectorNo == 34) {
    resiValue = 98900;
    landValue = 35100;
}
else if (sectorNo == 35) {
    resiValue = 98800;
    landValue = 36600;
}
else if (sectorNo == 36) {
    resiValue = 53500;
    landValue = 14700;
}
else if (sectorNo == 37) {
    resiValue = 56200;
    landValue = 19200;
}
else if (sectorNo == 38) {
    resiValue = 52200;
    landValue = 17200;
}
else if (sectorNo == 39) {
    resiValue = 70900;
    landValue = 25000;
}
else if (sectorNo == 40) {
    resiValue = 55800;
    landValue = 21100;
}
else if (sectorNo == 41) {
    resiValue = 55700;
    landValue = 21800;
}
else if (sectorNo == 42) {
    resiValue = 46900;
    landValue = 17100;
}
else if (sectorNo == 43) {
    resiValue = 49100;
    landValue = 18800;
}
else if (sectorNo == 44) {
    resiValue = 49100;
    landValue = 18800;
}
else if (sectorNo == 45) {
    resiValue = 55700;
    landValue = 21600;
}
else {
    resiValue = 0;
    landValue = 0;
}
// Floor Wise Values
if (floorNumber < 5) {
    floorRise = 1;
}
else if (floorNumber >=5 && floorNumber <= 10) {
    floorRise = 1.05;
}
else if (floorNumber >=11 && floorNumber <= 20) {
    floorRise = 1.075;
}
else if (floorNumber > 20) {
    floorRise = 1.10;
}
//Depreciation Wise Values
if (ghasara < 3) {
    ghasaraFall = 0;
}
else if (ghasara >= 3 && ghasara <= 5) {
    ghasaraFall = 5;
}
else {
    ghasaraFall = ghasara;
}
    
var riseValue = (resiValue * floorRise) - landValue;
var fallValue = (riseValue * (1-(ghasaraFall/100))) + landValue;
applicableRate = Math.ceil(fallValue);
total = area * applicableRate;
var roundedTotal = Math.round(total / 100) * 100;
let formattedTotal = formatIndianNumber(roundedTotal);
let wordsTotal = numberToWords(roundedTotal);

//Calculating stamp duty
let sdChargesMale = formatIndianNumber(Math.ceil(roundedTotal * 0.07));
let sdChargesFemale = formatIndianNumber(Math.ceil(roundedTotal * 0.06));

  // Store values in Table
  document.getElementById("printDate").innerHTML = currentDate;
  document.getElementById("SecNo").innerHTML = sectorNo;
  document.getElementById("PropValue").innerHTML = resiValue;
  document.getElementById("LandValue").innerHTML = landValue;
  document.getElementById("CArea").innerHTML = area;
  document.getElementById("flrN").innerHTML = floorNumber;
  document.getElementById("ghasara1").innerHTML = ghasara;
  document.getElementById("ghasara2").innerHTML = ghasaraFall;
  document.getElementById("AppRate").innerHTML = applicableRate;
  document.getElementById("totalN").innerHTML = formattedTotal;
  document.getElementById("totalW").innerHTML = wordsTotal;
  document.getElementById("sdMale").innerHTML = sdChargesMale;
  document.getElementById("sdFemale").innerHTML = sdChargesFemale;
}
