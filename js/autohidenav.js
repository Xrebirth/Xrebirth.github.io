jQuery(document).ready(function($){
    var mainHeader = $('.navbar-fixed'),
        headerHeight = mainHeader.height();
    
    //set scrolling variables
    var scrolling = false,
        previousTop = 0,
        currentTop = 0,
        scrollDelta = 10,
        scrollOffset = 150;
 
    $(window).on('scroll', function(){
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame)
                ? setTimeout(autoHideHeader, 250)
                : requestAnimationFrame(autoHideHeader);
        }
    });
 
    function autoHideHeader() {
        var currentTop = $(window).scrollTop();
 
        //there's no secondary nav or secondary nav is below primary nav
        if (previousTop - currentTop > scrollDelta) {
            //if scrolling up...
            mainHeader.removeClass('is-hidden');
        } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            //if scrolling down...
            mainHeader.addClass('is-hidden');
        }
        // scroll at bottom
        if (currentTop + $(window).height() == $(document).height()) {
            // load data
            mainHeader.removeClass('is-hidden');
        }
           previousTop = currentTop;
        scrolling = false;
    }
});