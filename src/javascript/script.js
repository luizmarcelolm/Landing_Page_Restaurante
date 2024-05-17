$(document). ready (function(){
   $('#mobile_btn').on('click', function () {
       $('#mobile_menu').toggleClass('active');
       $('#mobile_btn').find('i').toggleClass('fa-x');
   });

const sections = $('section');
const navItems = $('.nav_item');

$(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;
    
    if(scrollPosition <= 0){
        header.css ('box-shadow', 'none');
    }else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.2');
    }

    sections.each(function(i){
         const section = $(this);
         const sectionTop = section.offset().top - 97;
         const sectionBotton = sectionTop + section.outerHeight();

         if(scrollPosition >= sectionTop && scrollPosition < sectionBotton){
            activeSectionIndex = i;
            return false;
         }
    })
     navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');

});


});