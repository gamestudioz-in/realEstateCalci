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
    comiValue = 126500;
    landValue = 41700;
}
else if (sectorNo == 2) {
    comiValue = 167500;
    landValue = 45100;
}
else if (sectorNo == 3) {
    comiValue = 132400;
    landValue = 35500;
}
else if (sectorNo == 4) {
    comiValue = 154100;
    landValue = 42300;
}
else if (sectorNo == 5) {
    comiValue = 166700;
    landValue = 48000;
}
else if (sectorNo == 6) {
    comiValue = 193800;
    landValue = 57700;
}
else if (sectorNo == 7) {
    comiValue = 182300;
    landValue = 52000;
}
else if (sectorNo == 8) {
    comiValue = 169100;
    landValue = 46900;
}
else if (sectorNo == 9) {
    comiValue = 126700;
    landValue = 44800;
}
else if (sectorNo == 10) {
    comiValue = 156200;
    landValue = 45400;
}
else if (sectorNo == 11) {
    comiValue = 163400;
    landValue = 42500;
}
else if (sectorNo == 12) {
    comiValue = 171900;
    landValue = 53800;
}
else if (sectorNo == 13) {
    comiValue = 123700;
    landValue = 35000;
}
else if (sectorNo == 14) {
    comiValue = 151000;
    landValue = 39300;
}
else if (sectorNo == 15) {
    comiValue = 151800;
    landValue = 44500;
}
else if (sectorNo == 16) {
    comiValue = 117300;
    landValue = 26300;
}
else if (sectorNo == 17) {
    comiValue = 112800;
    landValue = 24400;
}
else if (sectorNo == 18) {
    comiValue = 143400;
    landValue = 32000;
}
else if (sectorNo == 19) {
    comiValue = 154200;
    landValue = 45800;
}
else if (sectorNo == 20) {
    comiValue = 158900;
    landValue = 44400;
}
else if (sectorNo == 21) {
    comiValue = 144400;
    landValue = 50200;
}
else if (sectorNo == 22) {
    comiValue = 64700;
    landValue = 16000;
}
else if (sectorNo == 23) {
    comiValue = 110100;
    landValue = 29500;
}
else if (sectorNo == 24) {
    comiValue = 91300;
    landValue = 30900;
}
else if (sectorNo == 25) {
    comiValue = 71600;
    landValue = 23200;
}
else if (sectorNo == 26) {
    comiValue = 64700;
    landValue = 17000;
}
else if (sectorNo == 27) {
    comiValue = 148300;
    landValue = 42000;
}
else if (sectorNo == 28) {
    comiValue = 97800;
    landValue = 31600;
}
else if (sectorNo == 29) {
    comiValue = 93100;
    landValue = 29000;
}
else if (sectorNo == 30) {
    comiValue = 116000;
    landValue = 31000;
}
else if (sectorNo == 31) {
    comiValue = 100200;
    landValue = 30700;
}
else if (sectorNo == 32) {
    comiValue = 101200;
    landValue = 30700;
}
else if (sectorNo == 33) {
    comiValue = 111300;
    landValue = 38600;
}
else if (sectorNo == 34) {
    comiValue = 147000;
    landValue = 35100;
}
else if (sectorNo == 35) {
    comiValue = 142000;
    landValue = 38400;
}
else if (sectorNo == 36) {
    comiValue = 80300;
    landValue = 16200;
}
else if (sectorNo == 37) {
    comiValue = 77100;
    landValue = 10200;
}
else if (sectorNo == 38) {
    comiValue = 65400;
    landValue = 17200;
}
else if (sectorNo == 39) {
    comiValue = 97500;
    landValue = 26800;
}
else if (sectorNo == 40) {
    comiValue = 81300;
    landValue = 21100;
}
else if (sectorNo == 41) {
    comiValue = 79500;
    landValue = 21800;
}
else if (sectorNo == 42) {
    comiValue = 65900;
    landValue = 17100;
}
else if (sectorNo == 43) {
    comiValue = 70300;
    landValue = 18800;
}
else if (sectorNo == 44) {
    comiValue = 70300;
    landValue = 18800;
}
else if (sectorNo == 45) {
    comiValue = 76000;
    landValue = 21600;
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
