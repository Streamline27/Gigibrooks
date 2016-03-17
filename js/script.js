/**
 * Created by Vladislav on 3/16/2016.
 */
$(document).ready(function(){
    var $openedSearchBar = $('.opened-search-bar');

    $('.bottom-bar-search-section').hover(
        function () {
            $openedSearchBar.stop().show(180);
        },
        function () {
            $openedSearchBar.stop().hide(180);
        }
    );

    $('.basket-button').click(
        function () {
            $(this).addClass('clicked');
            $('.basket-button .active-img').show();
            $('.basket-bar').stop().show();
        }
    );
    $('.basket-bar-close').click(
        function () {
            $('.basket-button').removeClass('clicked');
            $('.basket-button .active-img').hide();
            $('.basket-bar').stop().hide();
        }
    );
});