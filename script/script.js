$(document).ready(function() {

    // Header Menu dropdown
    $('#mob_menu img').click(function(){
        if($('#mob_menu img').prop('alt') == "menu"){
            $('header ul.header_menu').show();
            $('#mob_menu img').prop('alt', 'menu_close');
            $('#mob_menu img').prop('src', './assets/images/my_img.jpg');
        }else if($('#mob_menu img').prop('alt') == "menu_close"){
            $('header ul.header_menu').hide();
            $('#mob_menu img').prop('alt', 'menu');
            $('#mob_menu img').prop('src', './assets/images/menu.png');
        }
    });
    
});