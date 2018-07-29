// Page init function
$(document).ready(initPage);
function initPage() {
	// $('.nav-tabs > li:first-child > a')[0].click();
    $('#fullpage').fullpage({
    	fixedElements: '#header,#footer-socials,#footer-callback, #fixed-bg',
        anchors: ['main','price', 'services', 'about'],
        menu: '#myMenu',
        afterLoad: function(){
        	$('nav').tab("show");
        }
    });

    $('.tabbable .main-description .link').click(function() {
		$(this).parents().find('.main-description').hide();
		$('.tabbable').find('.nav-tabs').removeClass('d-flex').hide();
		$('.hidden-backlink-holder').show();
		$(this).parents().find('.detail-block').show();
    });
    $('.back-link').click(function() {
    	$(this).parents().find('.main-description').show();
		$('.tabbable').find('.nav-tabs').removeClass('d-flex').show();
		$('.hidden-backlink-holder').hide();
		$(this).parents().find('.detail-block').hide();
    });
    $('body').on('shown.bs.tab', function(event){
	    var swiper = new Swiper('.swiper-container', {
	      direction: 'vertical',
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
    });
}