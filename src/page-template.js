const createTeam = employee => {

    const htmlHead = function(){
    return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/f4975ee129.js" crossorigin="anonymous"></script>
        </head>
        
        <body class="bg-dark">
          <div class="jumbotron jumbotron-fluid header">
            <div class="container-fluid">
                <div class="row justify-content-md-center">
                    <h1 class="display-4"><i class="fa-solid fa-laptop-code"></i> The Coding Team <i class="fa-solid fa-users-rays"></i></h1>
                </div>
            </div>
          </div>
          <div class="row justify-content-center">
    `
    }

    const writeManagerHtml = manager => {
        return `  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-header">${manager.getName()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.getRole()}</li>
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            </ul>
            <div class="card-footer">Office Number: ${manager.getOfficeNumber()}</div>
        </div>
      </div>`
    }

    const writeEngineerHtml = engineer => {
        return `  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-header">${engineer.getName()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${engineer.getRole()}</li>
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            </ul>
            <div class="card-footer text-center">
                <a href="https://github.com/NateDogg97">${engineer.getGithub()}</a>
            </div>
        </div>
      </div>`
    }

    const writeInternHtml = intern => {
        return `  <div class="card m-3" style="width: 18rem">
        <div class="card-body">
            <h5 class="card-header">${intern.getName()}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${intern.getRole()}</li>
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            </ul>
            <div class="card-footer">
                <h6>${intern.getSchool()}</h5> 
            </div>        
        </div>
      </div>`
    }

    const html = [];

    html.push(htmlHead());
    html.push(employee
        .filter(employee => employee.getRole() === "Manager")
        .map(employee => writeManagerHtml(employee)));
    html.push(employee
        .filter(employee => employee.getRole() === "Engineer")
        .map(employee => writeEngineerHtml(employee)));
    html.push(employee
        .filter(employee => employee.getRole() === "Intern")
        .map(employee => writeInternHtml(employee)));

    return html.join('')
}

module.exports = employee => createTeam(employee);