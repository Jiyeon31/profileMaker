//Basic import
const inquirer = require("inquirer");
const fs = require("fs");
//Main info import
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//HTML generator js import
const teamCreator = require("./src/HTMLgenerator");

//array for questions
teamArray = [];
function profileMaker () {
function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the team manager\'s name',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A name is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the team manager\'s id?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An id is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the team manager\'s email?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An email address is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the team manager\'s office number?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An office number is required.");
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'Which team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I don\'t need to add any more members'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        teamArray.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', teamCreator(teamArray))
        }
    });
};

function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer\'s name?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A name is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer\'s id?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An id is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer\'s email address?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An email address is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer\'s GitHub username?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t need to add any more members'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        teamArray.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('dist/index.html', teamCreator(teamArray))
        }
    })
};

function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern\'s name?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A name is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern\'s id?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An id is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern\'s email address?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("An email address is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the intern\'s school?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A school name is required.");
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I don\'t need to add any more members'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        teamArray.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', teamCreator(teamArray))
        }
    })
} function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Success! your team profile is generated')
    });
};
managerQuestions();
};

profileMaker();





