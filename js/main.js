//Драггинг
$(function () {
    $(".drag").draggable({ containment: "#info" });
});

//Прелоадер
$(window).on('load', () => {
    window.setTimeout(() => {
        $('#preloader').fadeOut('slow');
    }, 1600);
    window.setTimeout(() => {$('#preloader').remove()}, 2000)
})

//Печать
$(function()
{

        $(".typed").typed({
            strings: [" niggers.", " feminism.", " LGBT."],
            typeSpeed: 50,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
            contentType: 'html',      
        });

}
);