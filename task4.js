function promptForExpression() {
    let expression = prompt("Enter a math expression (e.g., 3+4*5/10*8):");
    if (expression) {
        try {
            let result = evaluateExpression(expression);
            alert(`You entered: ${expression}, and the result is: ${result}`);
        } catch (error) {
            alert("Invalid expression. Please enter a valid math expression.");
        }
    } else {
        alert("Expression input cannot be empty.");
    }
}

function evaluateExpression(expression) {
    return eval(expression);
}
