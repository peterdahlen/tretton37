$(document).ready(function() {

    // API call - get all employees
    fetch('https://api.1337co.de/v3/employees', {
        headers: {
            'Authorization': 'api-key 14:2021-04-28:lucas.stenberg@tretton37.com 9b8ab5c933955af72983b6001c08249c8f3f1dd4b122ab2989a636ecebd36a55'
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
            <div class="card ${employee.office}" tabindex="0">
                <img class="profile" src="${employee.imagePortraitUrl}" alt="This is a beautiful profile picture of ${employee.name}" onerror="this.parentNode.style.display='none'">
                <div class="info">
                    <p class="name">${employee.name}</p>
                    <p class="office">${employee.office}</p>
                </div>
                <div class="contact">
                    <a class="github" href="https://github.com/${employee.gitHub}" target="_blank"><i class="fab fa-github"></i></a>
                    <a class="linkedin" href="https://www.linkedin.com/${employee.linkedIn}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a class="twitter" href="https://www.twitter.com/${employee.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>`
        })

        $(".cards-wrapper-grid").html(employees);
    })

    // Button to toggle grid and list view
    $(".toggle-list").click(function(){
        $(".cards-wrapper-grid, .cards-wrapper-list").toggleClass("cards-wrapper-grid cards-wrapper-list");
    })

    // Buttons to filter employees by office
    $("#filter-lund").click(function(){
        $(".card").not(".Lund").hide();
    })

    $("#filter-helsingborg").click(function(){
        $(".card").not(".Helsingborg").hide();
    })

    $("#filter-sthlm").click(function(){
        $(".card").not(".Stockholm").hide();
    })

    $("#filter-borlange").click(function(){
        $(".card").not(".Borlänge").hide();
    })

    $("#show-all").click(function(){
        $(".card").show();
        $(".card").has("img[src='null']").hide();
    })

});