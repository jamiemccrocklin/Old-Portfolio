//Scroll to about page
$(document).ready(function(){
    $(document).on('click', '.about', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".aboutPage").offset().top
        }, 1000);
    })
})

//Scroll to projects page
$(document).ready(function(){
    $(document).on('click', '.projects', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".projectsPage").offset().top
        }, 1000);
    })
})


//on click of hamburger, dropdown menu with li options
$(document).ready(function(){
    $(document).on('click', '.menu-btn', function(){
        $('.navItems').slideToggle(500);
    });
})

//Dropdown menu closes after clicking a link 




//dropdown menu closes on click anywhere outside of the menu

$(document).click(function(){
    $('.navItems').hide();
});