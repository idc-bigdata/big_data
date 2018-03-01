Array.prototype.randomValue = function () {
    return this[Math.floor((Math.random()*this.length))];
}

$(document).on('click', '.panel-heading span.icon_minim', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('focus', '.panel-footer input.chat_input', function (e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click', '#new_chat', function (e) {
    var size = $( ".chat-window:last-child" ).css("margin-left");
    size_total = parseInt(size) + 400;
    alert(size_total);
    var clone = $( "#chat_window_1" ).clone().appendTo( ".container" );
    clone.css("margin-left", size_total);
});
$(document).on('click', '.icon_close', function (e) {
    //$(this).parent().parent().parent().parent().remove();
    $( "#chat_window_1" ).remove();
});

$(document).on('click', 'button[data-token]', function (e) {
    var val = $(this).text();
    if($(this).data("token") == "trip_type") USER.trip_type = val;
    if($(this).data("token") == "group") USER.group = val;
    createMsg(0, answer(val), 3);
    // if($(this).data("trip_type") > 0) USER.trip_type = $(this).data("trip_type");
});

$(document).on("click", "#left-gallery img", function(e){
    var href = $(this).data("href");
    console.log(href);
    $("iframe.iframe-booking").attr("src", href);
    chatCtrl(0);
})

function chatCtrl(status){
    if(status){
        console.log("showing chat");
        $('.panel-body').slideDown();
        $(".chat-avatar").animate({width: "0px"}, 'slow');
        $("#chat_window_1").fadeIn();
        $(".iframe-booking").animate({"opacity": 0.3},"fast");
        if($('.messages').length < 1) createMsg(0,answers[0] , 2);
        if(GALLERY) galleryCtrl(1);
    }else{
        console.log("hiding chat");
        $('.panel-body').slideUp();
        $(".chat-avatar").animate({width: "100px"}, 'slow');
        $("#chat_window_1").fadeOut();
        $(".iframe-booking").animate({"opacity": 1},"fast");
        galleryCtrl(0);
    }
}

function galleryCtrl(status){
    if(status) $("#left-gallery").fadeIn();
    else $("#left-gallery").fadeOut();
}


$(document).ready(function(){

    $("#btn-chat").click(function(){
        captureTxt();
    })

    $(document).on("click", "input[id='btn-chat']", function () {
        captureTxt();
    });

    // $("#minim_chat_window.glyphicon-minus").click(function () {
    //     if($(this).hasClass("glyphicon-plus")) $(".iframe-booking").animate({"opacity": 0.3},"fast");
    //     else $(".iframe-booking").animate({"opacity": 1},"fast");
    // })

    $(".toggle-chat").click(function(){
        //$("#minim_chat_window").click();
        chatCtrl(0);
    })

    $(document).on("click", ".chat-avatar", function(){
        chatCtrl(1);
    })
    $(document).on("click", ".close-chat", function(){
        chatCtrl(0);
    })

    $(document).keypress(function(e) {
        if(e.which == 13) {
            captureTxt();
        }
    });

})