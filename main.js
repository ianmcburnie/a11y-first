window.onload = function(e) {

    /* ALL PAGES */
    if (document.body.clientWidth > 600) {
        document.body.classList.add('skin-large');
    }

    /* ERROR NOTICE */
    var pageError = document.getElementById('page-error');
    if (pageError) {
        pageError.focus();
    }

    /* INLINE ERROR ENHANCE */

    document.querySelectorAll('.field-validation input').forEach(function(item) {
        item.addEventListener('blur', function(e) {
            document.querySelector('#' + this.getAttribute('aria-describedby') + ' span').removeAttribute('hidden');
        })
    });
}


/* jQuery Plugins */
$(function() {
    $('.skipto--enhanced').skipTo();

    $('.hijax-form').on('submit', function(e) {
        e.preventDefault();
        $('.result-status').html('<p>1 result found</p>');
        $('main ol').empty().append('<li><a href="http://www.ebay.com">Item 1</a></li>');
    });

    $('.flyout--click').clickFlyout({focusManagement:'first', closeOnEsc: true});

    $('.flyout--hover').hoverFlyout();

    //$('.tooltip').hoverFlyout({expandedClass:'tooltip--expanded'}).focusFlyout({expandedClass:'tooltip--expanded'});

    $('.tooltip').tooltip();

    $('.fake-menu').clickFlyout({focusManagement:'first', closeOnEsc: true});

    $('.menu:not(.menu--faux)').menu().on('menuSelect', '[role=menuitem]', function(e, data) {
        alert($(this).text());
    });
});
