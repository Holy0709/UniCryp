// Функция копирования
function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
    alert("Пароль успешно скопирован!!!")
}


// Scroll в началу сайта
$(function() {
    $('.scroll-up').click(function(){
       $('html, body').animate({scrollTop:0}, 'slow');
   });
});
