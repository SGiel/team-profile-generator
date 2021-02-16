const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const employeeQuestions = [
];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Team Manager name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'Office number:',
    }
];

const buildTeamQuestion = [
    {
        type: 'list',
        name: 'team_member',
        message: 'Additions to the team:',
        default: 'I am finished building this team.',
        choices: ['Engineer', 'Intern', 'I am finished building this team.'],
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Engineer name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
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
        name: 'name',
        message: 'Intern name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID #:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'School attending:',
    }
];

// const promptEmployee = () => {
//     return inquirer.prompt(employeeQuestions);
// };

const promptManager = () => {
    return inquirer.prompt(managerQuestions);
}

const promptBuildTeam= () => {
    return inquirer.prompt(buildTeamQuestion);
}

const promptEngineer = () => {
    return inquirer.prompt(engineerQuestions);
}

const promptIntern = () => {
    return inquirer.prompt(internQuestions);
}

const buildTeam = (answers) => {
    // Need to put employee objects in team array here!
    // team = [];
    // team.push(answers);
    // console.log("team ", team);
    promptBuildTeam()
    .then(answer => { 
        if (`${answer.team_member}` === "Engineer") {
            promptEngineer()
                .then(EngineerAnswers => {
                    buildTeam(EngineerAnswers)
                })
        } else if (`${answer.team_member}` === "Intern") {
            promptIntern()
                .then(InternAnswers => {
                    buildTeam(InternAnswers)
                })
        } else if (`${answer.team_member}` === "I am finished building this team.") return;
    })

}

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
    .then(managerAnswers => {
        buildTeam(managerAnswers)
    })
    // .then(pageContent => {
    //     return writeFile('/dist/index.html', pageContent);
    //   })
    // .catch(err => {
    //     console.log(err);
    // });
