let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let resultTxt = document.querySelector('.result');

const calculateBMI = () => {
    if (weight.value == 0 && height.value == 0) {
        resultTxt.innerText = "Error! Enter valid weight and height.";
    } else {
        let h = height.value / 100;
        let bmi = weight.value / (h * h);
  
        if (bmi < 18.5) {
            resultTxt.innerText = `Your BMI is ${bmi}\nYou are in the underweight category 😏`;
        } else if (bmi >= 18.5 && bmi <= 25) {
            resultTxt.innerText = `Your BMI is ${bmi}\nYou are in the normal category 😌`;
        } else if (bmi > 25 && bmi < 30) {
            resultTxt.innerText = `Your BMI is ${bmi}\nYou are in the overweight category ☹`;
        } else {
            resultTxt.innerText = `Your BMI is ${bmi}\nYou are in the obese category 😱`;
        }
    }
};