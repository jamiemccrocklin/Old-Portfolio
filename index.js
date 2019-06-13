//Scroll to about page
$(document).ready(function(){
    console.log('scroll to about page working');
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
        console.log('scroll to projects page working');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(".projectsPage").offset().top
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

// $(document).on('click', function(event){
//     var length = $('.mobileNav:visible').length;
//     console.log('menu closing working');
//     if ($('.mobileNav:visible').length) { 
//         $('.navItems').hide();
//     }
//     console.log(length);
// });



$(document).on('click', function(event){
    if ($(document).width()<=1199) {
        $('.navItems').hide();
    }
});

