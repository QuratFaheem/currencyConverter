#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\nCurrency Converter.");
const currencyValue = {
    PKR: 278.16,
    UAE: 3.67,
    INR: 83.64,
    USD: 1,
};
let currency = await inquirer.prompt([{
        name: "convert_from",
        type: "list",
        message: "Currency Converting From: ",
        choices: ["PKR", "UAE", "INR", "USD"]
    },
    {
        name: "convertTo",
        type: "list",
        message: "\nCurrency Convert To: ",
        choices: ["PKR", "UAE", "INR", "USD"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount to convert :",
    },
]);
console.log("\n\nConverting your required currency turned out to be the Total is ", currencyValue[currency.convertTo] / currencyValue[currency.convert_from] * currency.amount);
