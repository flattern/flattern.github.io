$( document ).ready(function() {
    // Mask Input
    $(".phone_input").mask("+7 ( 999 ) 999-99-99");
    // Modal form feedback
    $('#save0_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#save0_reset').click();
            $('#modal-1 .md-close').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#save1_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#save1_reset').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#save2_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#save2_reset').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#save3_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#save3_reset').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#save4_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#save4_reset').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#call_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#call_reset').click();
            $('#modal-call .md-close').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#modreserve_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#modreserve_reset').click();
            $('#modal-reserve .md-close').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });
    $('#reserve_form').bikform({
        'submitButton': 'button[type="submit"]',
        'callbackSuccess': function () {
            ga('send', 'event', 'forma', 'goForm');
            yaCounter40956924.reachGoal("goForm");
            $('#reserve_reset').click();
            $('#thanks').click();
        },
        'callbackError': function () {
        },
    });

    $('.input_form, .modal_form textarea').focus(function () {
        $(this).removeClass('error');
        $(this).addClass('ok');
    });
});