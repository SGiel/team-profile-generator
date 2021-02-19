const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateHTML = require('./src/generateHTML');

const managerQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Team Manager name:',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Manager's name");
              return false;
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
        validate: idInput => {
            if (idInput.match(/^[0-9]+$/) && idInput.length > 0) {
                return true;
            } else {
                console.log("Invalid entry. Please enter a number.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
        validate: emailInput => {
            if (!(emailInput == '' || emailInput.indexOf('@') == -1 || emailInput.indexOf('.') == -1)) {
                return true;
            } else {
                console.log("Invalid entry. Please enter an email address.")
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office number:',
        validate: officeNumberInput => {
            if (officeNumberInput.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
                return true;
            } else {
                console.log("Invalid entry. Please enter an email address.")
            }
        }

    }
];

const buildTeamQuestion = [
    {
        type: 'list',
        name: 'teamMember',
        message: 'Additions to the team:',
        // default: 'I am finished building this team.',
        choices: ['Engineer', 'Intern', 'I am finished building this team.'],
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Engineer name:',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Engineer's name");
              return false;
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
        validate: idInput => {
            if (idInput.match(/^[0-9]+$/) && idInput.length > 0) {
                return true;
            } else {
                console.log("Invalid entry. Please enter a number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
        validate: emailInput => {
            if (!(emailInput == '' || emailInput.indexOf('@') == -1 || emailInput.indexOf('.') == -1)) {
                return true;
            } else {
                console.log("Invalid entry. Please enter an email address.")
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub username:',
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Intern name:',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the Intern's name");
              return false;
            }
        },
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
        validate: idInput => {
            if (idInput.match(/^[0-9]+$/) && idInput.length > 0) {
                return true;
            } else {
                console.log("Invalid entry. Please enter a number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
        validate: emailInput => {
            if (!(emailInput == '' || emailInput.indexOf('@') == -1 || emailInput.indexOf('.') == -1)) {
                return true;
            } else {
                console.log("Invalid entry. Please enter an email address.")
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'School attending:',
    }
];

const promptManager = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerAnswers => {
        const team = [];
        team.push(new Manager(`${managerAnswers.employeeName}`, `${managerAnswers.id}`, `${managerAnswers.email}`, `${managerAnswers.officeNumber}`));
        return team;
    })
};

const promptBuildTeam= () => {
    return inquirer.prompt(buildTeamQuestion)
}

const promptEngineer = () => {
    return inquirer.prompt(engineerQuestions)
}

const promptIntern = () => {
    return inquirer.prompt(internQuestions)
}

const buildTeam = (team) => {
    return inquirer.prompt(buildTeamQuestion)
    //promptBuildTeam()
    .then(answer => { 
        if (`${answer.teamMember}` === "Engineer") {
            return inquirer.prompt(engineerQuestions)
            //promptEngineer()
                .then(EngineerAnswers => {
                    team.push(new Engineer(`${EngineerAnswers.employeeName}`, `${EngineerAnswers.id}`, `${EngineerAnswers.email}`, `${EngineerAnswers.github}`));
                    return buildTeam(team)
                })
        } else if (`${answer.teamMember}` === "Intern") {
            return inquirer.prompt(internQuestions)
            //promptIntern()
                .then(InternAnswers => {
                    team.push(new Intern(`${InternAnswers.employeeName}`, `${InternAnswers.id}`, `${InternAnswers.email}`, `${InternAnswers.school}`));
                    return buildTeam(team)
                })
        } else return team;
    })
};

const writeFile = (fileName, fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'Open index.html in your browser to see employee files!'
        });
      });
    });
};



promptManager()
    .then(team => {
        return buildTeam(team);
    })
    .then(fullTeam => {
        return generateHTML(fullTeam);
    })
    .then(pageContent => {
        return writeFile('./dist/index.html', pageContent);
    })
    .catch(err => {
        console.log(err);
    });
