const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML')

const teamArray = [];

const init = () => {
    console.log(`
--------------------------------
    TEAM CREATOR INITIALIZED
--------------------------------
`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?',
            validate: valid => {
                if (valid) {
                    return true;
                }else {
                    console.log("  Please enter the manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID associated with the manager?',
            validate: valid => {
                if (parseInt(valid)) {
                    return true;
                }else {
                    console.log("  The manager's ID must be a number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.error ('  Please enter a valid email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number for the manager?',
            validate: valid => {
                if (parseInt(valid)) {
                    return true;
                }else {
                    console.log("  Please enter a valid office number!")
                    return false;
                }
            }
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
    })
}

const addEmployee = () => {
    console.log(`
-------------------------------
    ADDING NEW TEAM MEMBERS
-------------------------------
`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: valid => {
                if (valid) {
                    return true;
                }else {
                    console.log("  Please enter the employee's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID associated with the employee?',
            validate: valid => {
                if (parseInt(valid)) {
                    return true;
                }else {
                    console.log("  The employee's ID must be a number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee?',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.error ('  Please enter a valid email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("  Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("  Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMembers',
            message: 'Are there anymore team members you would like to add?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, addMembers } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        teamArray.push(employee); 

        if (addMembers) {
            return addEmployee(); 
        } else {
            return teamArray;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Team profile generated!")
        }
    })
}; 

// Function call to initialize app
init()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });