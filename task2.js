function promptForNumbers() {
    let start = parseInt(prompt("Enter the start number:"));
    let end = parseInt(prompt("Enter the end number:"));
    if (isNaN(start) || isNaN(end)) {
        alert("Please enter valid numbers.");
        return;
    }
    let oddNumbers = findOddNumbers(start, end);
    alert("Odd numbers between " + start + " and " + end + " are: " + oddNumbers.join(", "));
}

function findOddNumbers(start, end) {
    let oddNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}
