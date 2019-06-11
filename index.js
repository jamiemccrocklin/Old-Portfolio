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

//when hovering over project image, message pops up to "view project"