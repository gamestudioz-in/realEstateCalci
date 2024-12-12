function formatIndianNumber(num) {
    let parts = num.toString().split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1] ? '.' + parts[1] : '';
    
    let lastThreeDigits = integerPart.slice(-3);
    let otherDigits = integerPart.slice(0, -3);
    
    if (otherDigits) {
        lastThreeDigits = ',' + lastThreeDigits;
    }
    
    return otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThreeDigits + decimalPart;
}
function numberToWords(num) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const scales = ["", "Thousand", "Lakh", "Crore"];

    let words = [];

    // Handle 0 specifically
    if (num === 0) return "Zero";

    // Split number into chunks based on Indian numbering system
    let chunks = [];
    chunks.push(num % 1000); // Last 3 digits
    num = Math.floor(num / 1000);

    while (num > 0) {
        chunks.push(num % 100); // Next 2 digits
        num = Math.floor(num / 100);
    }

    // Reverse chunks for proper scaling
    chunks = chunks.reverse();

    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];

        if (chunk > 0) {
            let chunkWords = [];

            // Handle hundreds place
            if (Math.floor(chunk / 100) > 0) {
                chunkWords.push(units[Math.floor(chunk / 100)] + " Hundred");
                chunk %= 100;
            }

            // Handle tens and units place
            if (chunk > 10 && chunk < 20) {
                chunkWords.push(teens[chunk - 10]);
            } else {
                if (Math.floor(chunk / 10) > 0) {
                    chunkWords.push(tens[Math.floor(chunk / 10)]);
                }
                if (chunk % 10 > 0) {
                    chunkWords.push(units[chunk % 10]);
                }
            }

            // Add scale if applicable
            if (scales[chunks.length - 1 - i]) {
                chunkWords.push(scales[chunks.length - 1 - i]);
            }

            words.push(chunkWords.join(" "));
        }
    }

    return words.join(" ").trim();
}