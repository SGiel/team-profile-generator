const generateManagerCard = (managerArr) => {
    return managerArr.map((manager) => {
        return `
        <div class="card m-3" style="width: 20rem;">
            <div class="card-header text-white bg-primary">
                <h5 class="card-title">${manager.employeeName}</h5>
                <h6 class="card-subtitle mb-2 text-light"><i class="fas fa-mug-hot"></i>Manager</h6>
            </div> 
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${manager.email}" class="card-link">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `
    });
}
const generateEngineerCards = (engineerArr) => {
    if (!engineerArr) {
        return '';
      }
    return engineerArr.map((engineer) => {
        return `
        <div class="card m-3" style="width: 20rem;">
            <div class="card-header text-white bg-primary">
                <h5 class="card-title">${engineer.employeeName}</h5>
                <h6 class="card-subtitle mb-2 text-light"><i class="fas fa-glasses"></i> Engineer</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${engineer.email}" class="card-link">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" class="card-link">${engineer.github}</a></li>
            </ul>
        </div>
        `
    }).join('');
}
const generateInternCards = (internArr) => {
    if (!internArr) {
        return '';
      }
    return internArr.map((intern) => {
        return `
        <div class="card m-3" style="width: 20rem;">
            <div class="card-header text-white bg-primary">
                <h5 class="card-title">${intern.employeeName}</h5>
                <h6 class="card-subtitle mb-2 text-light"><i class="fas fa-user-graduate"></i> Intern</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${intern.email}" class="card-link">${intern.email}</a></li>
                <li class="list-group-item">School:${intern.school}</li>
            </ul>
        </div>
        `
    }).join('');
}


module.exports = (teamData) => {
    
    const managerArr = teamData.filter(manager => {
        return manager.constructor.name == "Manager";
    })

    const engineerArr = teamData.filter(engineer => {
        return engineer.constructor.name == "Engineer";
    })
    const internArr = teamData.filter(intern => {
        return intern.constructor.name == "Intern";
    })
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <!-- Bootstrap CDN -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">  
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div>
          <h1>My Team</h1>
        </div>
      </header>
      <main>
        <div class="container">
            <div class="row d-flex justify-content-center">
                ${generateManagerCard(managerArr)}
                ${generateEngineerCards(engineerArr)}
                ${generateInternCards(internArr)}
            </div>
        </div>
      </main>
      <!-- for bootstrap -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
    </body>
    </html>
    `;
};