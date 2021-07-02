const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

const genManagerCard = function (manObject) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header border border-dark">
            <h3 class = "name">${manObject.getName()}</h3>
            <h4 class = "role"><span class="oi oi-bullhorn"></span> ${manObject.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush border border-dark">
            <li class="list-group-item">ID: ${manObject.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto:${manObject.getEmail()}">${manObject.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manObject.ofNum}</li>
        </ul>
    </div>
    `
}

const genEngineerCards = function (engArr) {
    const engObjects = engArr.map(data => new Engineer(data));
    return `${engObjects.map(engObject => {
        return `
    <div class="card" style="width: 18rem;">
        <div class="card-header border border-dark">
            <h3 class = "name">${engObject.getName()}</h3>
            <h4 class = "role"><span class="oi oi-bug"></span> ${engObject.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush border border-dark">
            <li class="list-group-item">ID: ${engObject.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto:${engObject.getEmail()}">${engObject.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href = "https://github.com/${engObject.getGitHub()}">${engObject.getGitHub()}</li>
        </ul>
    </div>
    `;
    })
    .join('')}`;
};

const genInternCards = function (intArr) {
    const intObjects = intArr.map(data => new Intern(data));
    return `${intObjects.map(intObject => {
        return `
    <div class="card" style="width: 18rem;">
        <div class="card-header border border-dark">
            <h3 class = "name">${intObject.getName()}</h3>
            <h4 class = "role"><span class="oi oi-bug"></span> ${intObject.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush border border-dark">
            <li class="list-group-item">ID: ${intObject.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto:${intObject.getEmail()}">${intObject.getEmail()}</a></li>
            <li class="list-group-item">School: ${intObject.getSchool()}</li>
        </ul>
    </div>
    `;
    })
    .join('')}`;
};

const pageHTML = function (objects) {
    // destructure objects data by role
    const {engineers, interns, ...manager} = objects;
    

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" integrity="sha512-UyNhw5RNpQaCai2EdC+Js0QL4RlVmiq41DkmCJsRV3ZxipG2L0HhTqIf/H9Hp8ez2EnFlkBnjRGJU2stW3Lj+w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4"><span class="oi oi-people"></span> My Team</h1>
                </div>
            </div>
        </header>

        <main>
            <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
            ${genManagerCard(new Manager(manager))}
            ${genEngineerCards(engineers)}
            ${genInternCards(interns)}
            </div>
        </main>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = pageHTML;