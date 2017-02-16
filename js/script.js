$ ( document ).ready(function() {
    initFixedPlugin();
    tabs();
    dropdownHint();
    initRangeSlider();
    initSlickSliders();
    initVectorMap();
    animations();
    
});
function tabs() {
    $(".tabs_links li").click(function(e) {
        e.preventDefault();
        var tab = $(this).find('a').attr("href");
        $(this).parents('.tabs_block').find('.tabs_content').not(tab).css("display", "none");
        $(tab).fadeIn();
        $(this).siblings().removeClass("tabs_active");
        $(this).addClass("tabs_active");
    });
    $(".tabs_links li a").click(function(e) {
        e.preventDefault();
    });
}
function dropdownHint() {
    $('.more_info').click(function(){
        $(this).next().slideToggle();
    });
}
function initRangeSlider() {
    var $range1 = $("#cost_lid"),
        min = 220,
        max = 400,
        newVal = 310,
        newVal2,
        newVal3,
        newVal4,
        newVal5,
        newVal6;

    function updateVal() {
        $('.cost_slider .irs-single').html(newVal + " руб./лид");
        $('.cost_slider .irs-min').html(max + " руб./лид");
        $('.cost_slider .irs-max').html(min + " руб./лид");
        calculation(newVal, newVal2, newVal3, newVal4, newVal5, newVal6);
    }
    setTimeout(function(){
        updateVal();
    },1);
    $range1.ionRangeSlider({
        min: min,
        max: max,
        from: 310,
        step: 10,
        postfix: " руб./лид",
        onStart: function (data) {
            updateVal();
            selectColor($range1, data.from_percent);
        },
        onChange: function (data) {
            updateVal();
            selectColor($range1, data.from_percent);
        },
        onFinish: function (data) {
            updateVal();
        },
        onUpdate: function (data) {
            updateVal();
        }
    });
    $range1.on("change", function () {
        var $this = $(this),
            value = $this.prop("value");
        newVal = max - +value + min;
    });
    $range1.on("click", function () {
        updateVal();
    });

    var $range2 = $("#count_lid");
    $range2.ionRangeSlider({
        min: 500,
        max: 2400,
        from: 1000,
        step: 100,
        postfix: " шт.",
        onStart: function (data) {
            newVal2 = data.from;
            selectColor($range2, data.from_percent);
        },
        onChange: function (data) {
            newVal2 = data.from;
            calculation(newVal, newVal2, newVal3, newVal4, newVal5, newVal6);
            selectColor($range2, data.from_percent);
        }
    });

    var $range3 = $("#conversion");
    $range3.ionRangeSlider({
        min: 20,
        max: 92,
        from: 52,
        step: 4,
        postfix: " %",
        onStart: function (data) {
            newVal3 = data.from;
            selectColor($range3, data.from_percent);
        },
        onChange: function (data) {
            newVal3 = data.from;
            calculation(newVal, newVal2, newVal3, newVal4, newVal5, newVal6);
            selectColor($range3, data.from_percent);
        }
    });

    var $range4 = $("#average_check");
    $range4.ionRangeSlider({
        min: 6000,
        max: 15000,
        from: 10000,
        step: 500,
        postfix: " руб.",
        onStart: function (data) {
            newVal4 = data.from;
            selectColor($range4, data.from_percent);
        },
        onChange: function (data) {
            newVal4 = data.from;
            calculation(newVal, newVal2, newVal3, newVal4, newVal5, newVal6);
            selectColor($range4, data.from_percent);
        }
    });

    var $range5 = $("#profitability");
    $range5.ionRangeSlider({
        min: 8.0,
        max: 17.0,
        from: 12,
        step: 0.5,
        postfix: " %",
        onStart: function (data) {
            newVal5 = data.from;
            selectColor($range5, data.from_percent);
        },
        onChange: function (data) {
            newVal5 = data.from;
            calculation(newVal, newVal2, newVal3, newVal4, newVal5, newVal6);
            selectColor($range5, data.from_percent);
        }
    });

    var $range6 = $("#expenses"),
        min6 = 70000,
        max6 = 250000,
        newVal6 = 160000;

    function updateValExpenses() {
        $('.expenses_slider .irs-single').html(newVal6 + " руб.");
        $('.expenses_slider .irs-min').html(max6 + " руб.");
        $('.expenses_slider .irs-max').html(min6 + " руб.");
        calculation(newVal, newVal2, newVal3, newVal4, newVal5, newVal6);
    }
    setTimeout(function(){
        updateValExpenses();
    },1);
    $range6.ionRangeSlider({
        min: min6,
        max: max6,
        from: 160000,
        step: 10000,
        postfix: " руб.",
        onStart: function (data) {
            updateValExpenses();
            selectColor($range6, data.from_percent);
        },
        onChange: function (data) {
            updateValExpenses();
            selectColor($range6, data.from_percent);
        },
        onFinish: function (data) {
            updateValExpenses();
        },
        onUpdate: function (data) {
            updateValExpenses();
        }
    });
    $range6.on("change", function () {
        var $this = $(this),
            value = $this.prop("value");
        newVal6 = max6 - +value + min6;
    });
    $range6.on("click", function () {
        updateValExpenses();
    });

}
function calculation(range1, range2, range3, range4, range5, range6) {
    var rangeVal1 = +range1,
        rangeVal2 = +range2,
        rangeVal3 = +range3,
        rangeVal4 = +range4,
        rangeVal5 = +range5,
        rangeVal6 = +range6,
        countSuccess,
        premium,
        grossMargin,
        leadGeneration,
        netProfit;

    countSuccess = rangeVal2 * rangeVal3 / 100;
    $('.success_transaction span').html(countSuccess.toLocaleString());

    premium = rangeVal4 * countSuccess;
    $('.premium span').html(premium.toLocaleString());

    grossMargin = rangeVal5 * premium / 100;
    $('.gross_margin span').html(grossMargin.toLocaleString());

    leadGeneration = rangeVal1 * rangeVal2;
    $('.lead_generation span').html(leadGeneration.toLocaleString());

    netProfit = grossMargin - leadGeneration - rangeVal6;
    $('.net_profit span').html(netProfit.toLocaleString());

    if(netProfit < 0) {
        $('.main_itog.calc_item').addClass('lesion');
    }else{
        $('.main_itog.calc_item').removeClass('lesion');
    }
}
function selectColor(slider, percent) {
    var bar = slider.parents('.range_slider').find('.irs-bar');
    var barEdge = slider.parents('.range_slider').find('.irs-bar-edge');
    var toddler = slider.parents('.range_slider').find('.irs-slider');
    if(percent <= 25) {
        bar.css('background', '#EF5350');
        barEdge.css('background', '#EF5350');
        toddler.css('background-position', '0 0');
    }
    if(percent > 25 && percent <= 50) {
        bar.css('background', '#FFB74D');
        barEdge.css('background', '#FFB74D');
        toddler.css('background-position', '0 -40px');
    }
    if(percent > 50 && percent <= 75) {
        bar.css('background', '#CDDC39');
        barEdge.css('background', '#CDDC39');
        toddler.css('background-position', '0 -80px');
    }
    if(percent > 75) {
        bar.css('background', '#8BC34A');
        barEdge.css('background', '#8BC34A');
        toddler.css('background-position', '0 -120px');
    }
}
function initSlickSliders() {
    $('.video_slider1').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        swipe: false,
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.video_slider2').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        swipe: false,
        responsive: [
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
// Video popup pause effect
function video_popup(elem, href) {
    var modal = '#' + $(elem).attr("data-modal");
    $(modal).find('figure').html('<iframe style="width: 100%; height: 100%;" src="' + href + '?autoplay=true&rel=0" frameborder="0" allowfullscreen></iframe>');
}
function animations() {
    $(window).scroll(function() {
        $('.technology_list').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).find('.technology_item:nth-child(1)').addClass("animated fadeInUp");
            }
            if (imagePos < topOfWindow + 100) {
                $(this).find('.technology_item:nth-child(2)').addClass("animated fadeInUp");
            }
            if (imagePos < topOfWindow - 300) {
                $(this).find('.technology_item:nth-child(3)').addClass("animated fadeInUp");
            }
            if (imagePos < topOfWindow - 700) {
                $(this).find('.technology_item:nth-child(4)').addClass("animated fadeInUp");
            }
            if (imagePos < topOfWindow - 1100) {
                $(this).find('.technology_item:nth-child(5)').addClass("animated fadeInUp");
            }
            if (imagePos < topOfWindow - 1500) {
                $(this).find('.technology_item:nth-child(6)').addClass("animated fadeInUp");
            }
        });
    });
}
function initFixedPlugin() {
    
    if ($('.company_info .right').length) {
        $('.company_info .right').hcSticky({
             offResolutions: [-1200],
             responsive: false
        });
        $(window).resize(function () {
            if ($(window).width() > 1200) {
                $('.company_info .right').hcSticky('on');
            }else{
                $('.company_info .right').hcSticky('off');
            }
        });
    }
    if ($('.franshise_info .right').length) {
        $('.franshise_info .right').hcSticky({
             offResolutions: [-1200],
             responsive: false
        });
        $(window).resize(function () {
            if ($(window).width() > 1200) {
                $('.franshise_info .right').hcSticky('on');
            }else{
                $('.franshise_info .right').hcSticky('off');
            }
        });
    }
}
function initVectorMap() {
    // Массив всех объектов 
    var reserveArray = {
        'kr': ['Красноярский край'],
        'sa': ['Республика Саха (Якутия)'],
        'kn': ['Калининградская область'],
        'pr': ['Приморский край'],
        'sh': ['Сахалинская область'],
        'zb': ['Забайкальский край']
    };
    var notAvailableArray = {
        'vn': ['Воронежская область'],
        'pz': ['Пензенская область'],
        'sm': ['Смоленская область'],
        'ks': ['Краснодарский край'],
        'ta': ['Республика Татарстан'],
        'mc': ['Москва и Московская область']
    };
    
    colorRegion = '#bebebe'; // Цвет всех регионов
    reserveColor = '#f2c06c'; // Цвет изначально подсвеченных регионов
    availableColor = '#f6a63e'; // Цвет изначально недоступных регионов регионов
    
    reserveRegions = {};
    availableRegions = {};
    
    // Массив зарезервированных регионов, указанных в массиве reserveArray
    for(iso in reserveArray){
        reserveRegions[iso] = reserveColor;
    }
    for(iso in notAvailableArray){
        reserveRegions[iso] = availableColor;
    }
    var visibilityTooltip = true;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        visibilityTooltip = false;
    }
    $('#vmap').vectorMap({
        map: 'russia',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 2,
        color: colorRegion,
        colors: reserveRegions,
        hoverOpacity: 0.8,          
        showTooltip: visibilityTooltip,   
        // Клик по региону
        onRegionClick: function(element, code, region){
            console.log(element);
            console.log(code);
            console.log(region);
            var offsetMap, coordXMap, coordYMap;
            $('body').on('click touchstart','#vmap', function(e){
                offsetMap = $(this).offset();
                coordXMap = (e.pageX - offsetMap.left);
                coordYMap = (e.pageY - offsetMap.top);

                var leftOffset = $(this).width() - coordXMap;
                if(leftOffset > 225) {
                    $('.vector_map .tooltip').css('top', coordYMap);
                    $('.vector_map .tooltip').css('left', coordXMap);
                    $('.vector_map .tooltip').css('right', 'auto');
                }else{
                    $('.vector_map .tooltip').css('top', coordYMap);
                    $('.vector_map .tooltip').css('right', leftOffset);
                    $('.vector_map .tooltip').css('left', 'auto');
                }

                var text1 = 'Хотите предварительно бесплатно забронировать регион?';
                var text2 = 'Регион недоступен для бронирования.<br><br> Эксклюзивный партнер';
                var text3 = 'Регион предварительно забронирован.<br><br> Хотите бесплатно перебронировать регион?';
                $('.vector_map .tooltip .name').html(region);
                $('#modal-reserve .caption span').html(region);
                $('#modal-reserve #new_city_reserve').val(region);
                if(code in reserveArray) {
                    $('.vector_map .tooltip .anons').html(text3);
                    $('.vector_map .tooltip .reserve').html('Перебронировать').show();
                }else{
                    if(code in notAvailableArray) {
                        $('.vector_map .tooltip .anons').html(text2);
                        $('.vector_map .tooltip .reserve').hide();
                    }else{
                        $('.vector_map .tooltip .anons').html(text1);
                        $('.vector_map .tooltip .reserve').html('Забронировать').show();
                    }
                }
                $('.vector_map .tooltip').show();
            });
            setTimeout(function(){
                $('body').off('click touchstart','#vmap');
            },1);
        }           
    });
    $('body').on('click','.reserve_region .tooltip .close-button', function(){
        $(this).parents('.tooltip').hide();
    });
}