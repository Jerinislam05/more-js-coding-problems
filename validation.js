function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'enter a number'
    }
    return num1 + num2;
}
const result = add(false, 45); // jodi kono string ba jekono word diye jog korte boli tahole error ashbe r oita string naki number eta jante typeof diye check korte hobe
console.log(result);

function multiply(num1, num2) {
    console.log(num1, num2);
    return num1 * num2;
}
const output = multiply(12, 3); // input type thik moto dite hobe, majhe only coma dite hobe, kono symbol na
console.log(output);