const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createTeam = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs');

const employeeArray = [];

function init() {
    // To start, the user needs to create a manager with the following prompt //
    function createManager() {
    console.log('Welcome to Team Builder App! Begin by assigning you manager..');
      inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: "What is the manager's name?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const pass = answer.match(/[a-zA-Z][^0-9]/);
                if(answer !== '' && pass){
                    return true
                }
                return "Do not use numbers when entering a name."
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const fail = answer.match(/[^0-9]/);
                if (answer !== '' && !fail){
                    return true
                }
                return "Please enter only digits manager ID."
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const pass = answer.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
                if(pass){
                    return true
                }
                return "Please enter a valid email addess."
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's Office number?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const fail = answer.match(/[^0-9]/);
                if(answer !== '' && !fail){
                    return true
                }
                return "Please enter only digits."
            }
        }
      ])
      // Following the prompt comes the promise which assigns the answers from the prompt
      // to create a new Manager //
      .then((answers) => {
        const manager = new Manager (
            answers.manager,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        // Here we push the new manager to the employeeArray that we use to generate
        // the html in the page-template.js file //
        employeeArray.push(manager);
        // Then we call for the next prompt to add team members to the employeeArray //
        addTeamMember();
      })
    }
    // This is when the user is prompted to enter more team members //
    function addTeamMember() {
    console.log('Perfect! Now its time to build the team.');
      inquirer.prompt([
        {
            type: 'list',
            name: 'newEmp',
            message: 'Would you like to add any team members?',
            choices: ['Engineer', 'Intern', 'No thank you']
        }
      ])
      // We use a switch function to direct inquirer to the next series of prompts //
      .then((answers) => {
        switch (answers.newEmp) {
            case 'Engineer':
                addEngineer();
                break;
        
            case 'Intern':
                addIntern();
                break;
        
            default:
                console.log('Great! Looks like your team has been created.');
                console.log(`Here are your team members: ${employeeArray}`);
                buildHtml();
                break;
        }
      })
    }  
      // Next we add an engineer to the team //
    function addEngineer() {
      console.log('* The engineer looks excited to join the team *');
        inquirer.prompt([
          {
              type: 'input',
              name: 'engineer',
              message: "What is the engineer's name?",
              validate: (answer) => {
                const pass = answer.match(/[a-zA-Z][^0-9]/);
                if(answer !== '' && pass){
                    return true
                }
                return "Do not use numbers when entering a name."
              }
          },
          {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const fail = answer.match(/[^0-9]/);
                if (answer !== '' && !fail){
                    return true
                }
                return "Please enter only digits for engineer ID."
            }            
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const pass = answer.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
                if(pass){
                    return true
                }
                return "Please enter a valid email addess."
            }            
          },
          {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: (answer) => {
                // This regex notation might need some fine tuning. I wanted this to mean:
                // (NOT letters and numbers OR two or more consecutive hyphens) //
                const fail  = answer.match(/^[a-zA-Z0-9]-{2,}/);
                if(answer === '') {
                    return 'This area cannot be empty.'
                } else if (!fail) {
                    return true
                }
                return "Please enter a valid GitHub username."
            }
          }
        ])
        .then((answers) => {
            const engineer = new Engineer (
                answers.engineer,
                answers.id,
                answers.email,
                answers.github
            );

            employeeArray.push(engineer);

            addTeamMember();
        })
    }
      // Next we want to include the prompts for an intern //
    function addIntern() {
      console.log('The intern looks lost.');
        inquirer.prompt([
          {
            type: 'input',
            name: 'intern',
            message: "What is the intern's name?",
            validate: (answer) => {
                const pass = answer.match(/[a-zA-Z][^0-9]/);
              if(answer !== '' && pass){
                  return true
              }
              return "Do not use numbers when entering a name."
            }           
          },
          {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const fail = answer.match(/[^0-9]/);
                if (answer !== '' && !fail){
                    return true
                }
                return "Please enter only digits for intern ID."
            }              
          },
          {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            // Validating the answer to make sure the user input makes sense //
            validate: (answer) => {
                const pass = answer.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
                if(pass){
                    return true
                }
                return "Please enter a valid email addess."
            }
          },
          {
            type: 'input',
            name: 'school',
            message: 'To which school is the intern enrolled?',
            validate: (answer) => {
                if(answer !== ''){
                    return true
                }
                return 'Please provide an school.'
            }
          }
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.intern,
                answers.id,
                answers.email,
                answers.school
            );

            employeeArray.push(intern);

            addTeamMember();
        })
    }

    function buildHtml() {
        fs.writeFileSync('./dist/team.html', createTeam(employeeArray), 'utf-8', (err) => {
            (err) ? console.error(err) : console.log('Success!');
        });
    }
    

  createManager();
}

init();