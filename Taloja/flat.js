var sectorNo, carpetArea, area, ghasara, floorNumber, resiValue, landValue, applicableRate, floorRise, ghasaraFall, totalVal;

var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var monthShort = today.toLocaleString('default', { month: 'short' });
var year = today.getFullYear();
var currentDate = `${day} ${monthShort}. ${year}`;

function stamp() {
  //Hide & Seek
  document.getElementById("valform").style.display = "none"; document.getElementById("sharableDiv").style.display = "block";
  document.getElementById("share").style.display = "inline-block";
document.getElementById("showStampDuty").style.display = "inline-block";

  // Get form values
  sectorNo = document.querySelector("select[name='sector']").value;
  carpetArea = document.querySelector("input[name='area']").value;
  area = parseFloat(carpetArea * 1.2).toFixed(2);  ghasara = document.querySelector("input[name='depghas']").value;
  floorNumber = document.querySelector("input[name='floor']").value;
// Sector wise values
if (sectorNo == 1) {
    resiValue = 56100;
    landValue = 19000;
}
else if (sectorNo == 2) {
    resiValue = 62000;
    landValue = 19000;
}
else if (sectorNo == 3) {
    resiValue = 51900;
    landValue = 19000;
}
else if (sectorNo == 4) {
    resiValue = 66500;
    landValue = 15100;
}
else if (sectorNo == 5) {
    resiValue = 66000;
    landValue = 14700;
}
else if (sectorNo == 6) {
    resiValue = 53500;
    landValue = 13900;
}
else if (sectorNo == 7) {
    resiValue = 66000;
    landValue = 14700;
}
else if (sectorNo == 8) {
    resiValue = 59400;
    landValue = 14300;
}
else if (sectorNo == 9) {
    resiValue = 65500;
    landValue = 17300;
}
else if (sectorNo == 10) {
    resiValue = 62400;
    landValue = 19000;
}
else if (sectorNo == 11) {
    resiValue = 58900;
    landValue = 19000;
}
else if (sectorNo == 12) {
    resiValue = 53500;
    landValue = 19000;
}
else if (sectorNo == 13) {
    resiValue = 54500;
    landValue = 19000;
}
else if (sectorNo == 14) {
    resiValue = 64100;
    landValue = 17300;
}
else if (sectorNo == 15) {
    resiValue = 59400;
    landValue = 12600;
}
else if (sectorNo == 16) {
    resiValue = 61300;
    landValue = 14300;
}
else if (sectorNo == 17) {
    resiValue = 66500;
    landValue = 15100;
}
else if (sectorNo == 18) {
    resiValue = 66500;
    landValue = 15100;
}
else if (sectorNo == 19) {
    resiValue = 55400;
    landValue = 15100;
}
else if (sectorNo == 20) {
    resiValue = 62700;
    landValue = 16800;
}
else if (sectorNo == 21) {
    resiValue = 52900;
    landValue = 18100;
}
else if (sectorNo == 22) {
    resiValue = 52900;
    landValue = 18100;
}
else if (sectorNo == 23) {
    resiValue = 63600;
    landValue = 17300;
}
else if (sectorNo == 24) {
    resiValue = 60200;
    landValue = 17300;
}
else if (sectorNo == 25) {
    resiValue = 50000;
    landValue = 14300;
}
else if (sectorNo == 26) {
    resiValue = 67200;
    landValue = 17300;
}
else if (sectorNo == 27) {
    resiValue = 54000;
    landValue = 18100;
}
else if (sectorNo == 28) {
    resiValue = 51400;
    landValue = 18100;
}
else if (sectorNo == 29) {
    resiValue = 51400;
    landValue = 18100;
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
