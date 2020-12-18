const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");




const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const mQuestion = [{
        name: "name",
        type: "input",
        message: "What is your manager's name?",
    },
    {
        name: "id",
        type: "number",
        message: "What is your manager's id?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your manager's email?",
    },
    {
        name: "office",
        type: "number",
        message: "What is your manager's office number?",
    },
    {
        name: "team",
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "I don't want any more team members"],
    }
]

const eQuestion = [{
        name: "name",
        type: "input",
        message: "What is engineer's name?",
    },
    {
        name: "id",
        type: "number",
        message: "What is engineer's id?",
    },
    {
        name: "email",
        type: "input",
        message: "What is engineer's email?",
    },
    {
        name: "github",
        type: "input",
        message: "What is engineer's github?"
    },
    {
        name: "team",
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Intern", "I don't want any more team members"],
    }
]

const iQuestion = [{
    name: "name",
    type: "input",
    message: "What is your intern's name?",
},
{
    name: "id",
    type: "number",
    message: "What is your intern's id?",
},
{
    name: "school",
    type: "input",
    message: "What school does the intern attend?"
},
{
    name: "team",
    type: "list",
    message: "Which type of team member would you like to add?",
    choices: ["I don't want any more team members"],
}
]

// const engineerChoice = mQuestion[4].choices[0];
// const internChoice = mQuestion[4].choices[1];

const choiceEngineer = "Engineer";
const internChoice = "Intern";
// const managerChoice = "Manager"



// What is the difference between the prompt
// prompt({

// })

inquirer.prompt(mQuestion).then(function managerChoice(answer) {
    // console.log(answer);
    // console.log(answer.name);
    // console.log(answer.id);
    // console.log(answer.email);
    // console.log(answer.office);

    let managerTeamMemeberChoice = answer.team;


    const myTeam = [];
    myTeam.push(answer);

    if (managerTeamMemeberChoice === "Engineer") {
        // console.log("run the engineer prompt questions");
        inquirer.prompt(eQuestion).then(function engineerChoice(answer) {


            let engineerTeamMemberChoice = answer.team;
            myTeam.push(answer);


            if (engineerTeamMemberChoice === "Intern") {
                // console.log("run the intern prompt");
                inquirer.prompt(iQuestion).then(function (response) {
                    console.log("render html");

                    myTeam.push(response);

                    // console.log(myTeam)
                    // renderTeam(myTeam);

                })
            }else {
                console.log("render html. I HAVE NO IDEA HOW TO DO THIS PART");
            }
        });
    } else {
        console.log("RENDER HTML");


        // function renderTeam(myTeam) {
        //     fs.writeFile(outputPath, render, "utf8", (err) => {
        //         if (err) throw err;
        //         console.log('The file has been saved!');
        //       });
        // }
        // console.log(myTeam[0].name);
        // renderTeam(myTeam[0].name);
    }

    // console.log(engineer);
    // console.log(answer.team);
    // if (answer === engineerChoice)
    // if(user chooses engineer) {
    //     ask engineer questions
    //     inquirer.prompt(eQuestion)
    // }
    // else if (user chooses intern) {
    //     ask intern questions
    //     inquirer.prompt(iQuestions)
    // }
});


// myTeam is the array that contains all the team members
// make sure you call renderTeam() 






// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```