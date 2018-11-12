// Page init function
$(document).ready(initPage);

function initPage() {
    $('#fullpage').fullpage({
        responsiveHeight: '570',
        responsiveWidth: '769',
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        fixedElements: '#header,#footer-socials,#footer-callback, #fixed-bg',
        anchors: ['main', 'price', 'documents', 'about','contacts'],
        menu: '#myMenu',
        offsetSections: true,
        scrollOverflow: true,
        afterLoad: function() {
            $('nav').tab("show");
        }
    });
    $('.menu-mobile').click(function () {
        $(this).toggleClass('back');
    	$('.fader').toggleClass('show');
    	$('#myMenu').toggleClass('show-menu');
    });
    $('.fader').click(function () {
    	$('.fader').removeClass('show');
    	$('#myMenu').removeClass('show-menu');
        $('.menu-mobile').removeClass('back');
    });
    $('#myMenu a').click(function() {
    	$('#myMenu').removeClass('show-menu');
    	$('.fader').removeClass('show');
        $('.menu-mobile').removeClass('back');
    });

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
    // $('body').on('shown.bs.tab', function(event) {
    //     if ($(window).width() < 992) {
    //         $('.telephone, .servers, .team-holder').addClass('swiper-container');
    //         var swiper = new Swiper('.telephone.swiper-container', {
    //             slidesPerView: 'auto',
    //             centeredSlides: true,
    //             loop: true,
    //             slidesPerGroup: 1,
    //             freeMode: true,
    //             spaceBetween: 10
    //         });
    //         var swiper = new Swiper('.servers.swiper-container', {
    //             slidesPerView: 'auto',
    //             centeredSlides: true,
    //             loop: true,
    //             freeMode: true,
    //             slidesPerGroup: 1,
    //             spaceBetween: 10
    //         });
    //         var swiper = new Swiper('.team-holder.swiper-container', {
    //             slidesPerView: 4,
    //             loop: false,
    //             spaceBetween: 20
    //         });
    //     }
    // });
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