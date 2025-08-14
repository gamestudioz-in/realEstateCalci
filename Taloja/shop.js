var sectorNo, carpetArea, area, ghasara, comiValue, landValue, applicableRate, riseValue, floorRise, ghasaraFall, totalVal;

var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var monthShort = today.toLocaleString('default', { month: 'short' });
var year = today.getFullYear();
var currentDate = `${day} ${monthShort}. ${year}`;

function stamp() {
    // Hide form
    document.getElementById("valform").style.display = "none";

    // Show results section & sharableDiv
    document.getElementById("resultsSection").classList.remove("hidden");
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("sharableDiv").style.display = "block";

    // Show share & stamp duty buttons
    document.getElementById("share").style.display = "inline-block";
    document.getElementById("showStampDuty").style.display = "inline-block";

    // Get form values
    sectorNo = document.querySelector("select[name='sector']").value;
    carpetArea = document.querySelector("input[name='area']").value;
    area = parseFloat(carpetArea * 1.2).toFixed(2);
    ghasara = document.querySelector("input[name='depghas']").value;

    // Sector wise values (original TShop rates)
    if (sectorNo == 1) { comiValue = 76500; landValue = 19000; }
    else if (sectorNo == 2) { comiValue = 86900; landValue = 19000; }
    else if (sectorNo == 3) { comiValue = 76500; landValue = 19000; }
    else if (sectorNo == 4) { comiValue = 95800; landValue = 15100; }
    else if (sectorNo == 5) { comiValue = 95600; landValue = 15000; }
    else if (sectorNo == 6) { comiValue = 73600; landValue = 14600; }
    else if (sectorNo == 7) { comiValue = 94800; landValue = 15000; }
    else if (sectorNo == 8) { comiValue = 81700; landValue = 15000; }
    else if (sectorNo == 9) { comiValue = 94200; landValue = 18500; }
    else if (sectorNo == 10) { comiValue = 85800; landValue = 20000; }
    else if (sectorNo == 11) { comiValue = 84200; landValue = 19000; }
    else if (sectorNo == 12) { comiValue = 78800; landValue = 20000; }
    else if (sectorNo == 13) { comiValue = 76500; landValue = 19600; }
    else if (sectorNo == 14) { comiValue = 92100; landValue = 18500; }
    else if (sectorNo == 15) { comiValue = 85400; landValue = 13500; }
    else if (sectorNo == 16) { comiValue = 88200; landValue = 14300; }
    else if (sectorNo == 17) { comiValue = 95800; landValue = 15100; }
    else if (sectorNo == 18) { comiValue = 95800; landValue = 15100; }
    else if (sectorNo == 19) { comiValue = 79600; landValue = 16200; }
    else if (sectorNo == 20) { comiValue = 90200; landValue = 18000; }
    else if (sectorNo == 21) { comiValue = 75800; landValue = 18100; }
    else if (sectorNo == 22) { comiValue = 75800; landValue = 18100; }
    else if (sectorNo == 23) { comiValue = 95400; landValue = 17300; }
    else if (sectorNo == 24) { comiValue = 86600; landValue = 17300; }
    else if (sectorNo == 25) { comiValue = 73600; landValue = 14300; }
    else if (sectorNo == 26) { comiValue = 95000; landValue = 17300; }
    else if (sectorNo == 27) { comiValue = 77300; landValue = 18300; }
    else if (sectorNo == 28) { comiValue = 75800; landValue = 18100; }
    else if (sectorNo == 29) { comiValue = 75800; landValue = 18100; }
    else { comiValue = 0; landValue = 0; }

    // No Floor Wise Values (shops at Ground Floor)
    floorRise = 1;

    // Depreciation Wise Values
    if (ghasara < 3) { ghasaraFall = 0; }
    else if (ghasara >= 3 && ghasara <= 5) { ghasaraFall = 5; }
    else { ghasaraFall = ghasara; }

    var riseValue = (comiValue * floorRise) - landValue;
    var fallValue = (riseValue * (1 - (ghasaraFall / 100))) + landValue;
    applicableRate = Math.ceil(fallValue);
    total = area * applicableRate;

    var roundedTotal = Math.round(total / 100) * 100;
    let formattedTotal = formatIndianNumber(roundedTotal);
    let wordsTotal = numberToWords(roundedTotal);

    // Stamp Duty Calculation
    function roundUpToNearestHundred(value) {
        return Math.ceil(value / 100) * 100;
    }

    let sdAmountMale = roundedTotal * 0.07;
    let sdAmountFemale = roundedTotal * 0.06;
    let hundredSDMale = roundUpToNearestHundred(sdAmountMale);
    let hundredSDFemale = roundUpToNearestHundred(sdAmountFemale);

    let sdChargesMale = formatIndianNumber(hundredSDMale);
    let sdChargesFemale = formatIndianNumber(hundredSDFemale);

    // Store values in table
    document.getElementById("printDate").innerHTML = currentDate;
    document.getElementById("SecNo").innerHTML = sectorNo;
    document.getElementById("PropValue").innerHTML = formatIndianNumber(comiValue);
    document.getElementById("LandValue").innerHTML = formatIndianNumber(landValue);
    document.getElementById("CArea").innerHTML = area;
    document.getElementById("ghasara1").innerHTML = ghasara;
    document.getElementById("ghasara2").innerHTML = ghasaraFall;
    document.getElementById("AppRate").innerHTML = formatIndianNumber(applicableRate);
    document.getElementById("totalN").innerHTML = formattedTotal;
    document.getElementById("totalW").innerHTML = wordsTotal;
    document.getElementById("sdMale").innerHTML = '₹' + sdChargesMale;
    document.getElementById("sdFemale").innerHTML = '₹' + sdChargesFemale;
}