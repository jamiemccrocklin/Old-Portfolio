//Scroll to about home page from click of name
$(document).ready(function(){
    $(document).on('click', 'h1', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    })
})

//Scroll to about page from nav bar
$(document).ready(function(){
    console.log('scroll to about page working');
    $(document).on('click', '.about', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".aboutPage").offset().top
        }, 1000);
    })
})

//Scroll to about page from 'learn more'
$(document).ready(function(){
    console.log('scroll to about page working');
    $(document).on('click', '.check', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".aboutPage").offset().top
        }, 1000);
    })
})

//Scroll to about page from arrow button
$(document).ready(function(){
    console.log('scroll to about page working');
    $(document).on('click', '.arrow', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".aboutPage").offset().top
        }, 1000);
    })
})

//Scroll to projects page
$(document).ready(function(){
    $(document).on('click', '.projects', function(event) {
        console.log('scroll to projects page working');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".projectsPage").offset().top
        }, 1000);
    })
})

//Scroll to contact information
$(document).ready(function(){
    $(document).on('click', '.contactInfo', function(event) {
        console.log('scroll to projects page working');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".footerIcons").offset().top
        }, 1000);
    })
})


//on click of hamburger, dropdown menu with li options
$(document).ready(function(event){
    $('header').on('click', '.menu-btn', function(event){
        event.stopPropagation();
        console.log('dropdown menu running');
        $('.navItems').slideToggle(500);
    });
})

//Dropdown menu closes after clicking a link and closes on click anywhere outside of the menu

$(document).on('click', function(event){
    if ($(document).width()<=1199) {
        $('.navItems').hide();
    }
});

