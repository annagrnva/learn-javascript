const number1Input = document.querySelector("#number1-input");
const number2Input = document.querySelector("#number2-input");
const sumInput = document.querySelector("#sum-input");
const calculatorForm = document.querySelector("#calculator-form");

calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number1Value = number1Input.value;
    const number2Value = number2Input.value;
    const sumValue = sumInput.value = +number1Input.value + +number2Input.value;

    console.log(number1Value);
    console.log(number2Value);
    console.log(sumValue)
});



