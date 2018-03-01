var typingImg = "files/typing.gif";

var avA = "files/noki-av.png";
var avB = "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAo1AAAAJDc5NmMxMTk0LTFhNjEtNDdjNy1iYTM5LTZiMjgwMTBiMTVlMg.jpg";
var VOICE = "UK English Male";

var USER = {
    name: "You"
}

function createMsg(type, msg, delay){

    if(type){

        var elm = "                    <div class='row msg_container base_receive'>\n" +
            "                        <div class='col-md-2 col-xs-2 avatar'>\n" +
            "                            <img src=''" + avB + "' class='img-responsive avatar'>\n" +
            "                        </div>\n" +
            "                        <div class='col-md-10 col-xs-10'>\n" +
            "                            <div class='messages msg_receive'>\n" +
            "                                <p>" + msg + "</p>\n" +
            "                                <time datetime='2009-11-13T20:00'>" + USER.name + "</time>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>";

        $("#chatbox").append(elm);

    }else{  //0 = outcoming


        delay = delay || 0;
        console.log("delay:" + delay);
        var msgHtml = msg.msg;

        var elm = "                    <div class='row msg_container base_sent'>\n" +
            "                        <div class='col-md-10 col-xs-10'>\n" +
            "                            <div class='messages msg_sent'>\n" +
            "                                <p><img class='typing-txt' width='20px' src='" + typingImg + "'></p>\n" +
            "                                <time datetime='2009-11-13T20:00'>Noky</time>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                        <div class='col-md-2 col-xs-2 avatar'>\n" +
            "                            <img src='" + avA + "' class='img-responsive avatar'>\n" +
            "                        </div>\n" +
            "                    </div>";

        $("#chatbox").append(elm);
        $('.msg_container_base').scrollTop($('.msg_container_base')[0].scrollHeight);

        window.setTimeout(function(){
            if(msg.txt != undefined) responsiveVoice.speak(msg.txt, VOICE);
            else responsiveVoice.speak(msgHtml, VOICE);

            $("div.msg_sent p").last().html(msgHtml);
            if(msg.listen == undefined) listen.start();
        }, delay * 1000);

    }
    $('.msg_container_base').scrollTop($('.msg_container_base')[0].scrollHeight);

}

function captureTxt() {
    var msg = $("#btn-input").val();
    if(msg.length == 0) return null;
    createMsg(1, msg);
    $("#btn-input").val("").delay(3000);
    createMsg(0, answer(msg), 2);
}


