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
});