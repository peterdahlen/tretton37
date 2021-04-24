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
    })

});