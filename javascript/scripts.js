$(document).ready(function() {

    // API call - get all employees
    fetch('https://api.1337co.de/v3/employees', {
        headers: {
            'Authorization': 'api-key 14:2021-04-14:lucas.stenberg@tretton37.com 95adec8ac69cd1c667a88a8fccab326b605dcad5be32ec10a8698d00c9a590f7'
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Map data and display it in a <div>
        const employees = data.map(employee => {
            return `
            <div class="card">
                <img class="profile" src="${employee.imagePortraitUrl}">
                <p class="name">Name: ${employee.name}</p>
                <p class="office">Office: ${employee.office}</p>
                <div class="contact">
                    <a class="github" href="https://github.com/${employee.gitHub}" target="_blank">GitHub</a>
                    <a class="linkedin" href="https://github.com/${employee.linkedIn}" target="_blank">LinkedIn</a>
                    <a class="twitter" href="https://github.com/${employee.twitter}" target="_blank">Twitter</a>
                </div>
            </div>`
        })

        $(".cards-wrapper-grid").html(employees);
    })

});