var sectorNo, carpetArea, area, ghasara, comiValue, landValue, applicableRate, riseValue, floorRise, ghasaraFall, totalVal;

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
  area = parseFloat(carpetArea * 1.2).toFixed(2);
  ghasara = document.querySelector("input[name='depghas']").value;
// Sector wise values
if (sectorNo == 1) {
    comiValue = 76500;
    landValue = 19000;
}
else if (sectorNo == 2) {
    comiValue = 77600;
    landValue = 19000;
}
else if (sectorNo == 3) {
    comiValue = 76500;
    landValue = 19000;
}
else if (sectorNo == 4) {
    comiValue = 83300;
    landValue = 15100;
}
else if (sectorNo == 5) {
    comiValue = 82400;
    landValue = 14700;
}
else if (sectorNo == 6) {
    comiValue = 72900;
    landValue = 13900;
}
else if (sectorNo == 7) {
    comiValue = 82400;
    landValue = 14700;
}
else if (sectorNo == 8) {
    comiValue = 74300;
    landValue = 14300;
}
else if (sectorNo == 9) {
    comiValue = 81900;
    landValue = 17300;
}
else if (sectorNo == 10) {
    comiValue = 78000;
    landValue = 19000;
}
else if (sectorNo == 11) {
    comiValue = 76500;
    landValue = 19000;
}
else if (sectorNo == 12) {
    comiValue = 76500;
    landValue = 19000;
}
else if (sectorNo == 13) {
    comiValue = 76500;
    landValue = 19000;
}
else if (sectorNo == 14) {
    comiValue = 80100;
    landValue = 17300;
}
else if (sectorNo == 15) {
    comiValue = 74300;
    landValue = 12600;
}
else if (sectorNo == 16) {
    comiValue = 76700;
    landValue = 14300;
}
else if (sectorNo == 17) {
    comiValue = 83300;
    landValue = 15100;
}
else if (sectorNo == 18) {
    comiValue = 83300;
    landValue = 15100;
}
else if (sectorNo == 19) {
    comiValue = 74400;
    landValue = 15100;
}
else if (sectorNo == 20) {
    comiValue = 78400;
    landValue = 16800;
}
else if (sectorNo == 21) {
    comiValue = 75800;
    landValue = 18100;
}
else if (sectorNo == 22) {
    comiValue = 75800;
    landValue = 18100;
}
else if (sectorNo == 23) {
    comiValue = 79500;
    landValue = 17300;
}
else if (sectorNo == 24) {
    comiValue = 75300;
    landValue = 17300;
}
else if (sectorNo == 25) {
    comiValue = 73600;
    landValue = 14300;
}
else if (sectorNo == 26) {
    comiValue = 84100;
    landValue = 17300;
}
else if (sectorNo == 27) {
    comiValue = 75800;
    landValue = 18100;
}
else if (sectorNo == 28) {
    comiValue = 75800;
    landValue = 18100;
}
else if (sectorNo == 29) {
    comiValue = 75800;
    landValue = 18100;
}
else {
    comiValue = 0;
    landValue = 0;
}
// No Floor Wise Values Because shops are at Ground Floor
floorRise = 1;
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
    
var riseValue = (comiValue * floorRise) - landValue;
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
  document.getElementById("PropValue").innerHTML = comiValue;
  document.getElementById("LandValue").innerHTML = landValue;
  document.getElementById("CArea").innerHTML = area;
  document.getElementById("ghasara1").innerHTML = ghasara;
  document.getElementById("ghasara2").innerHTML = ghasaraFall;
  document.getElementById("AppRate").innerHTML = applicableRate;
  document.getElementById("totalN").innerHTML = formattedTotal;
  document.getElementById("totalW").innerHTML = wordsTotal;  
  document.getElementById("sdMale").innerHTML = sdChargesMale;
  document.getElementById("sdFemale").innerHTML = sdChargesFemale;
}
