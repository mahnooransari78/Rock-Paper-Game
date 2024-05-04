import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Player1",
        message: "select any one",
        type: "list",
        choices: ["Rock", "Paper", "Scissors"],
    },
    {
        name: "Player2",
        message: " select any one",
        type: "list",
        choices: ["Rock", "Paper", "Scissors"],
    }
]);
if (answer.Player1 === answer.Player2) {
    console.log("It's tie :(");
}
else if (answer.Player1 === "Paper" && answer.Player2 === "Rock") {
    console.log("Player1 is win! :)");
    console.log("Player2 is lose !:(");
}
else if (answer.Player1 === "Scissors" && answer.Player2 === "Paper") {
    console.log("Player1 is win! :)");
    console.log("Player2 is lose !:(");
}
else if (answer.Player1 === "Rock" && answer.Player2 === "Scissors") {
    console.log("Player1 is win! :)");
    console.log("Player2 is lose !:(");
}
else {
    console.log("player2 is win ! :)");
    console.log("Player1 is lose ! :(");
}
