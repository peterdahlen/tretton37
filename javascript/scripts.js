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
                    <p class="name brand-background ">${employee.name}</p>
                    <p class="office">${employee.office}</p>
                </div>
                <div class="contact">
                    <a class="github" href="https://github.com/${employee.gitHub}" target="_blank"><i class="fab fa-github"></i></a>
                    <a class="linkedin" href="https://www.linkedin.com/${employee.linkedIn}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a class="twitter" href="https://www.twitter.com/${employee.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>
            </div>`
        })

        $(".cards-wrapper").html(employees);
    })

    // Buttons to switch between grid and list layout
    $(".layout-list").click(function(){
        $(".layout-grid").removeClass("switch-on");
        $(this).addClass("switch-on");
        $(".cards-wrapper").removeClass("grid").addClass("list");
    })

    $(".layout-grid").click(function(){
        $(".layout-list").removeClass("switch-on");
        $(this).addClass("switch-on");
        $(".cards-wrapper").removeClass("list").addClass("grid");
    })

    // Buttons to filter employees by office
    $("#filterLund").click(function(){
        $(".card").not(".Lund").fadeOut();
        $(".filter").not(".filter-lund").fadeOut();
        $(this).addClass("switch-on");
        $("#showAll").removeClass("switch-on");    
    })

    $("#filterHelsingborg").click(function(){
        $(".card").not(".Helsingborg").fadeOut();
        $(".filter").not(".filter-helsingborg").fadeOut();
        $(this).addClass("switch-on");
        $("#showAll").removeClass("switch-on");
    })

    $("#filterSthlm").click(function(){
        $(".card").not(".Stockholm").fadeOut();
        $(".filter").not(".filter-sthlm").fadeOut();
        $(this).addClass("switch-on");
        $("#showAll").removeClass("switch-on");
    })

    $("#filterBorlange").click(function(){
        $(".card").not(".Borlänge").fadeOut();
        $(".filter").not(".filter-borlange").fadeOut();
        $(this).addClass("switch-on");
        $("#showAll").removeClass("switch-on");
    })

    $("#showAll").click(function(){
        $(".card").fadeIn();
        $(".filter").fadeIn();
        $(".card").has("img[src='null']").hide();
        $(this).addClass("switch-on");
        $("#filterLund").removeClass("switch-on");
        $("#filterHelsingborg").removeClass("switch-on");
        $("#filterSthlm").removeClass("switch-on");
        $("#filterBorlange").removeClass("switch-on");   
    })
    
    // Scroll to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) { //If scrolled past 400px
          $('.scroll-to-top').fadeIn(); //Show button
        } else {
          $('.scroll-to-top').fadeOut(); //Hide button
        }
      });
      $('.scroll-to-top').click(function(){ 
        $('html, body').animate({scrollTop : 0},1000);
      });

});