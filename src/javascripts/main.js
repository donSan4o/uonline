// Page init function
$(document).ready(initPage);

function initPage() {
    $('#fullpage').fullpage({
        responsiveHeight: '570',
        responsiveWidth: '640',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        fixedElements: '#header,#footer-socials,#footer-callback, #fixed-bg',
        anchors: ['main', 'price', 'services', 'documents', 'about','contacts'],
        menu: '#myMenu',
        afterLoad: function() {
            $('nav').tab("show");
        }
    });
    $('.menu-mobile').click(function () {
    	$('.fader').show();
    	$('#myMenu').addClass('show-menu');
    });
    $('.fader').click(function () {
    	$('.fader').hide();
    	$('#myMenu').removeClass('show-menu');
    });
    $('#myMenu a').click(function() {
    	$('#myMenu').removeClass('show-menu');
    	$('.fader').hide();
    })

    $('.tabbable .main-description .link').click(function() {
        $(this).parents().find('.main-description').hide();
        $('.tabbable').find('.nav-tabs').removeClass('d-flex').hide();
        $('.hidden-backlink-holder').show();
        $(this).parents().find('.detail-block').show();
        if ($(window).width() < 992) {
        	$('.detail-block .page-title').addClass('hide');
        }
    });
    var swiper = new Swiper('#doc .swiper-container', {
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">Название документа_'+ (index + 1) + '</span>';
        },
      },
    });
    $('.back-link').click(function() {
        $(this).parents().find('.main-description').show();
        $('.tabbable').find('.nav-tabs').removeClass('d-flex').show();
        $('.hidden-backlink-holder').hide();
        $(this).parents().find('.detail-block').hide();
        $('.detail-block .page-title').removeClass('hide');
    });
    $('body').on('shown.bs.tab', function(event) {
        if ($(window).width() < 992) {
            $('.telephone, .servers, .team-holder').addClass('swiper-container');
            var swiper = new Swiper('.telephone.swiper-container', {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                slidesPerGroup: 1,
                freeMode: true,
                spaceBetween: 10
            });
            var swiper = new Swiper('.servers.swiper-container', {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                freeMode: true,
                slidesPerGroup: 1,
                spaceBetween: 10
            });
            var swiper = new Swiper('.team-holder.swiper-container', {
                slidesPerView: 4,
                loop: false,
                spaceBetween: 20
            });
        }
    });
    if ($(window).width() < 992) {
        $('.internet').addClass('swiper-container');
        var swiper = new Swiper('.internet.swiper-container', {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            freeMode: true,
            slidesPerGroup: 1,
            spaceBetween: 10
        });
    }

}