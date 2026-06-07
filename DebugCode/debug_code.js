	
function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
	let result1 = multiply(num1, num2);
    let result2 = division(num1, num2);
    let result3 = suma(num1, num2);
	// Display the result
	displayResult(result1, result2, result3);

	} else {
		displayResult('Please enter valid numbers');
		}
	}
	function multiply(a, b) {
	    // Introduce a debugger statement to pause execution
	    debugger;
	    // Multiply the numbers
	    return a * b;
	}
    function division(a, b){
        if(b<0){
            displayResult('Please enter valid denominator')
        }
        return a/b;
    }
    function suma(a, b){
        return a+ b;
    }
function displayResult(result1, result2, result3) {
	// Display the result in the paragraph element
	const resultElement1 = document.getElementById('result1');
	resultElement1.textContent = `The result is: ${result1}`;
    const resultElement2 = document.getElementById('result2');
	resultElement2.textContent = `The result is: ${result2}`;
    const resultElement3 = document.getElementById('result3');
	resultElement3.textContent = `The result is: ${result3}`;
}