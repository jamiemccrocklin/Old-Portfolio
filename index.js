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
$(document).ready(function(){
    console.log('dropdown menu running');
    $('header').on('click', '.menu-btn', function(){
        $('.navItems').slideToggle(500);
    });
})

//Dropdown menu closes after clicking a link and closes on click anywhere outside of the menu

// $(document).on('click', function(event){
//     // event.preventDefault();
//     console.log('menu closing working');
//     $('.navItems').hide();
// });

let showHamburger = false
$(document).on('click', '.menu-btn', function(){
    if (!showHamburger) {
        $('.navItems').slideToggle(500);
        showHamburger  = true
     }
     else {
        $('.navItems').hide();
         showHamburger   = false
     }
});

