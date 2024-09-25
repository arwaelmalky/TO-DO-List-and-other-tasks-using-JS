window.onload = function() {
    const tips = [
        "Use '===' instead of '==' for comparison to avoid type coercion.",
        "Use 'const' for variables that won't be reassigned.",
        "Use 'let' instead of 'var' for block-scoped variables.",
        "Arrow functions provide a shorter syntax and lexically bind the 'this' value.",
        "Use template literals for easier string interpolation: `Hello, ${name}`.",
        "JavaScript arrays have useful methods like 'map', 'filter', and 'reduce'.",
        "Always declare functions and variables before using them.",
        "Avoid global variables to reduce the risk of conflicts.",
        "Use 'try...catch' to handle exceptions and errors.",
        "Use 'async' and 'await' for easier asynchronous code handling."
    ];

    function showRandomTip() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        document.getElementById("tip").innerText = tips[randomIndex];
    }

    showRandomTip();
};
