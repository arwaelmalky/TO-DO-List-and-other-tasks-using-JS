function calculateArea() {
    let radiusInput = prompt("Enter the value of your circle's radius:");
    
    if (radiusInput !== null && radiusInput.trim() !== "") {
        let radius = parseFloat(radiusInput);
        
        if (!isNaN(radius) && radius > 0) {
            let area = Math.PI * Math.pow(radius, 2);
            
            alert("Total area of the circle is " + area);
        } else {
            alert("Please enter a valid positive number for the radius.");
        }
    } else {
        alert("Radius input cannot be empty.");
    }
}


function calculateSquareRoot() {
    var value = prompt("Enter the value you want to calculate its square root:");
    if (value !== null) {
        var result = Math.sqrt(value);
        alert("The square root of " + value + " is " + result);
    }
}

function calculateCosine() {
    var angle = prompt("Enter an angle to calculate its cosine value:");
    if (angle !== null) {
        var radians = angle * (Math.PI / 180);
        var result = Math.cos(radians).toFixed(4);
        document.getElementById("cosineResult").innerText = "cos " + angle + "° is " + result;
    }
}
