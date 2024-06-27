import inquirer from "inquirer";
//initialize user balance and pin code .
const myBalance = 50000;
const myPin = 1234;
const atm = await inquirer.prompt({
    name: "pincode",
    type: "number",
    message: "Enter your pin code:"
});
if (atm.pincode === myPin) {
    console.log("Pin is correct,Login successfully!!");
    const operatorAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Select an operation",
        choices: ["Withdraw Amount", "Check Balance", "fastcash"]
    });
    if (operatorAns.operation === "Check Balance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else if (operatorAns.operation === "Withdraw Amount") {
        const amountAns = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter your amount",
        });
        let balance = myBalance - amountAns.amount;
        if (amountAns.amount <= myBalance) {
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log(`your acount balance is insufficient`);
        }
    }
    else if (operatorAns.operation === "fastcash") {
        const fastcashAns = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "please select your amount",
                choices: [1000, 2000, 5000, 10000],
            }
        ]);
        let balance2 = myBalance - fastcashAns.fastcash;
        console.log(`your remaining balance is ${balance2}`);
    }
}
else {
    console.log("your pincode is incorrect!!");
}
