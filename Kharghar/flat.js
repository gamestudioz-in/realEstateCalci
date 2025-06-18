var sectorNo, carpetArea, area, terraceArea, ghasara, floorNumber, resiValue, landValue, applicableRate, floorRise, ghasaraFall, totalVal;

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
  terraceArea = document.querySelector("input[name='Tarea']").value;
  area = parseFloat(carpetArea * 1.2).toFixed(3);
  ghasara = document.querySelector("input[name='depghas']").value;
  floorNumber = document.querySelector("input[name='floor']").value;
// Sector wise values
if (sectorNo == 1) {
    resiValue = 94900;
    landValue = 41700;
}
else if (sectorNo == 2) {
    resiValue = 134000;
    landValue = 45100;
}
else if (sectorNo == 3) {
    resiValue = 106100;
    landValue = 35500;
}
else if (sectorNo == 4) {
    resiValue = 122400;
    landValue = 42300;
}
else if (sectorNo == 5) {
    resiValue = 132200;
    landValue = 48000;
}
else if (sectorNo == 6) {
    resiValue = 155700;
    landValue = 57700;
}
else if (sectorNo == 7) {
    resiValue = 145800;
    landValue = 52000;
}
else if (sectorNo == 8) {
    resiValue = 135200;
    landValue = 46900;
}
else if (sectorNo == 9) {
    resiValue = 94700;
    landValue = 44800;
}
else if (sectorNo == 10) {
    resiValue = 123900;
    landValue = 45400;
}
else if (sectorNo == 11) {
    resiValue = 130800;
    landValue = 42500;
}
else if (sectorNo == 12) {
    resiValue = 137600;
    landValue = 53800;
}
else if (sectorNo == 13) {
    resiValue = 99000;
    landValue = 35000;
}
else if (sectorNo == 14) {
    resiValue = 121300;
    landValue = 39300;
}
else if (sectorNo == 15) {
    resiValue = 121200;
    landValue = 44500;
}
else if (sectorNo == 16) {
    resiValue = 93700;
    landValue = 26300;
}
else if (sectorNo == 17) {
    resiValue = 90400;
    landValue = 24400;
}
else if (sectorNo == 18) {
    resiValue = 115200;
    landValue = 32000;
}
else if (sectorNo == 19) {
    resiValue = 122000;
    landValue = 45800;
}
else if (sectorNo == 20) {
    resiValue = 127400;
    landValue = 44400;
}
else if (sectorNo == 21) {
    resiValue = 115600;
    landValue = 50200;
}
else if (sectorNo == 22) {
    resiValue = 51800;
    landValue = 16000;
}
else if (sectorNo == 23) {
    resiValue = 88000;
    landValue = 29500;
}
else if (sectorNo == 24) {
    resiValue = 65500;
    landValue = 30900;
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
    resiValue = 118600;
    landValue = 42000;
}
else if (sectorNo == 28) {
    resiValue = 72100;
    landValue = 31600;
}
else if (sectorNo == 29) {
    resiValue = 64900;
    landValue = 29000;
}
else if (sectorNo == 30) {
    resiValue = 92700;
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
    resiValue = 89100;
    landValue = 38600;
}
else if (sectorNo == 34) {
    resiValue = 117700;
    landValue = 35100;
}
else if (sectorNo == 35) {
    resiValue = 113700;
    landValue = 38400;
}
else if (sectorNo == 36) {
    resiValue = 64200;
    landValue = 16200;
}
else if (sectorNo == 37) {
    resiValue = 61800;
    landValue = 20200;
}
else if (sectorNo == 38) {
    resiValue = 52200;
    landValue = 17200;
}
else if (sectorNo == 39) {
    resiValue = 78000;
    landValue = 26800;
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
var totalTerraceArea = terraceArea * (applicableRate * 40/100);
var grandTotal = total + totalTerraceArea;
var roundedTotal = Math.round(grandTotal / 100) * 100;
let formattedTotal = formatIndianNumber(roundedTotal);
let wordsTotal = numberToWords(roundedTotal);

//Calculating stamp duty
function roundUpToNearestHundred(value) {
    return Math.ceil(value / 100) * 100;
}
let sdAmountMale = roundedTotal * 0.07;
let sdAmountFemale = roundedTotal * 0.06;
let hundredSDMale = roundUpToNearestHundred(sdAmountMale);
let hundredSDFemale = roundUpToNearestHundred(sdAmountFemale);
let sdChargesMale = formatIndianNumber(hundredSDMale);
let sdChargesFemale = formatIndianNumber(hundredSDFemale);

  // Store values in Table
if(terraceArea == 0) {
  document.getElementById("terraceRow").style.display = "none";
}
  document.getElementById("printDate").innerHTML = currentDate;
  document.getElementById("SecNo").innerHTML = sectorNo;
  document.getElementById("PropValue").innerHTML = resiValue;
  document.getElementById("LandValue").innerHTML = landValue;
  document.getElementById("CArea").innerHTML = area;
  document.getElementById("TerArea").innerHTML = terraceArea;
  document.getElementById("flrN").innerHTML = floorNumber;
  document.getElementById("ghasara1").innerHTML = ghasara;
  document.getElementById("ghasara2").innerHTML = ghasaraFall;
  document.getElementById("AppRate").innerHTML = applicableRate;
  document.getElementById("totalN").innerHTML = formattedTotal;
  document.getElementById("totalW").innerHTML = wordsTotal;
  document.getElementById("sdMale").innerHTML = sdChargesMale;
  document.getElementById("sdFemale").innerHTML = sdChargesFemale;
}
