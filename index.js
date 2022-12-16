let firstInput;
let secondInput;
let operation;
function init() {
	//consts declaration
	const result = document.getElementById("result");
	const delet = document.getElementById("delete");
	const equal = document.getElementById("equal");
	const one = document.getElementById("one");
	const two = document.getElementById("two");
	const three = document.getElementById("three");
	const four = document.getElementById("four");
	const five = document.getElementById("five");
	const six = document.getElementById("six");
	const seven = document.getElementById("seven");
	const eight = document.getElementById("eight");
	const nine = document.getElementById("nine");
	const zero = document.getElementById("zero");
	const dot = document.getElementById("dot");
	const plus = document.getElementById("plus");
	const minus = document.getElementById("minus");
	const multiplication = document.getElementById("multiplication");
	const division = document.getElementById("division");
	const potency = document.getElementById("potency");
	const squareRoot = document.getElementById("square-root");
	const modulo = document.getElementById("modulo");

	//Events

	dot.onclick = function (e) {
		result.textContent = result.textContent + ".";
	};
	one.onclick = function (e) {
		result.textContent = result.textContent + "1";
	};

	two.onclick = function (e) {
		result.textContent = result.textContent + "2";
	};
	three.onclick = function (e) {
		result.textContent = result.textContent + "3";
	};
	four.onclick = function (e) {
		result.textContent = result.textContent + "4";
	};
	five.onclick = function (e) {
		result.textContent = result.textContent + "5";
	};
	six.onclick = function (e) {
		result.textContent = result.textContent + "6";
	};
	seven.onclick = function (e) {
		result.textContent = result.textContent + "7";
	};
	eight.onclick = function (e) {
		result.textContent = result.textContent + "8";
	};
	nine.onclick = function (e) {
		result.textContent = result.textContent + "9";
	};
	zero.onclick = function (e) {
		result.textContent = result.textContent + "0";
	};

	delet.onclick = function (e) {
		resetAll();
	};

	plus.onclick = function (e) {
		firstInput = result.textContent;
		operation = "+";
		clear();
	};

	minus.onclick = function (e) {
		firstInput = result.textContent;
		operation = "-";
		clear();
	};

	division.onclick = function (e) {
		firstInput = result.textContent;
		operation = "/";
		clear();
	};

	multiplication.onclick = function (e) {
		firstInput = result.textContent;
		operation = "*";
		clear();
	};

	potency.onclick = function (e) {
		firstInput = result.textContent;
		operation = "^";
		clear();
	};

	squareRoot.onclick = function (e) {
		firstInput = result.textContent;
		operation = "sqrt";
		clear();
	};

	modulo.onclick = function (e) {
		firstInput = result.textContent;
		operation = "%";
		clear();
	};

	equal.onclick = function (e) {
		secondInput = result.textContent;
		resolve();
	};
}
//Function for clearing the screen after touching an operator
function clear() {
	result.textContent = "";
}
//Function for a total reset of the screen and variables
function resetAll() {
	result.textContent = "";
	firstInput = 0;
	secondInput = 0;
	operation = "";
}
//flow control for making the operations depending on each case.
function resolve() {
	let res = 0;
	switch (operation) {
		case "+":
			res = parseFloat(firstInput) + parseFloat(secondInput);
			break;

		case "-":
			res = parseFloat(firstInput) - parseFloat(secondInput);
			break;

		case "*":
			res = parseFloat(firstInput) * parseFloat(secondInput);
			break;

		case "/":
			res = parseFloat(firstInput) / parseFloat(secondInput);
			break;

		case "^":
			res = Math.pow(firstInput, secondInput);
			break;

		case "%":
			res = parseFloat(firstInput) % parseFloat(secondInput);
			break;

		case "sqrt":
			res = Math.pow(firstInput, 1 / 2);
			break;
	}
	clear();
	result.textContent = res;
}
