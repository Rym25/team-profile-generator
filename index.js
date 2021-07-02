const inquirer = require('inquirer');
const pageHTML = require('./src/page-template.js');
const Manager = require('./lib/Manager');

const promptManager = () => {
    console.log(`
=================
New Team Profile
=================
    `);
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Team Managers name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Manger's ID number.",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log('Please enter an ID number!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the Manager's Email.",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter an email!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ofNum',
        message: "Please enter the Manager's office number.",
        validate: ofNumInput => {
            if(ofNumInput) {
                return true;
            } else {
                console.log('Please enter an office number!')
                return false;
            }
        }
    }
])
}

promptManager()
.then(data => {
    console.log('inquirer',data);
    const manObject = new Manager(data);
    return manObject;
})
.then(obj => {
    return pageHTML(obj);
})
.then(html => console.log(html));