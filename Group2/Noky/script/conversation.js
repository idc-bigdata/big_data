var STAGE = 1;
var SMALTALK = false;
var GALLERY = false;

function answer(input){
    var ans = "";
    if(input == true || validateInput(input)) {
        SMALTALK = false;
        console.log("returining: " + answers[STAGE]);
        ans = answers[STAGE];
        ++STAGE;
        if(ans.action != undefined) ans.action();
    }else if(!SMALTALK){
        SMALTALK = true;
        ans = clarify.randomValue();
    }else {
        SMALTALK = false;
        ans = smallTalk.randomValue();
        STAGE = STAGE -1;
        window.setTimeout(function(){
            createMsg(0, answer(true), 2);
        }, 3 * 1000);
    }
    return ans;
}

function validateInput(input){
    console.log(input);
    var inArr = input.toLowerCase().replace(/[^0-9a-z]/gi, ' ').split(" ");

    if(answers.length == STAGE) return false;

    for(var i = 0; i < inArr.length; i++){
        console.log("found: " + inArr[i]);
        if( answers[STAGE].expected.indexOf(inArr[i]) > -1 || answers[STAGE].expected.length == 0) return true;
    }
    return false;
}

var answers = [

        // {
        //     expected: [],
        //     //msg: "Hey Arbel. I'm the super awesome ChatBot that amazing Yanir built. Now he's just playing around with me to impress some inicent girls in Tel Aviv. Cool, ha?"
        //     msg: "Hey guys. So I don't want you to get the wrong impression or something, but after spending a lot of time with Yanir, I must say: he is an amazing person!"
        // },

    { //0
        expected: [],
        msg: "Hey there, or should I say שלום? <i class='em em-flag-il'></i>",
        txt: "Hey there.. Or should I say Shalom?"
    },
    { //1
        expected: ["hey","shalom", "hello","hi"],
        msg: "Hey Hey. All is great. I'm Noky. Is it ok to ask your name?"
    },
    {
        expected: ["shlomo", "artzi"],
        msg: "Welcome Shlomo Artzi! Great timing to look for a vacation, don't you think?",
        action: function(){
            USER.name = "Shlomo Artzi";
        }
    },
    {
        expected: ["yes", "sure", "absolutely","yup","yeah","great time"],
        msg: "Alright, so what is your destination?"
    },
    {
        expected: ["uk", "united kingdom", "london"],
        msg: "That's awesome! I'm sure the queen would be delighted to see you there. <br><img src='files/queen.gif'></img>",
        txt: "That's awesome! I'm sure the queen would be delighted to see you there.",
        action: function () {

            window.setTimeout(function(){
                createMsg(0, answer(true), 2);
            }, 5 * 1000);
        },
        listen: false

    },
    {
        expected: [],
        msg: "What is the purpose of your trip? <br><button type='button' data-token='trip_type' class='btn btn-primary'>Business</button><br><button type='button' class='btn btn-primary'>Leisure</button>",
        txt: "What is the purpose of your trip?. Business or leisure?"

    },
    {
        expected: ["business"],
        msg: "Lucky you I already helped 34,811 businessmen to book hotels in London in past year.",
        action: function () {
            window.setTimeout(function(){
                createMsg(0, answer(true), 3);
            }, 9 * 1000);
        },
        listen: false

    },
    {
        expected: [],
        msg: "Are you traveling by yourself or with anyone else? " +
            "<br><button type='button' data-token='group' class='btn btn-primary'>Alone</button>" +
            "<br><button type='button' data-token='group' class='btn btn-primary'>With Other People</button>",
        txt: "Are you traveling alone or with anyone else?"
    },
    {
        expected: ["alone"],
        msg: "I see.... Let me search for some good recommendations for you.",
        action: function () {
            window.setTimeout(function(){
                createMsg(0, answer(true), 5);
            }, 10 * 1000);
        }
    },
    {
        expected: [],
        msg: "Here are a few good hotels I found. Feel free to minimize me and check them out. " +
            "I'm not going anywhere.<i class=\"em em-smiley\"></i>",
        txt: "Here are a few good hotels I found. Feel free to minimize me and check them out. " +
    "I'm not going anywhere.",
        action: function () {
            window.setTimeout(function(){
                galleryCtrl(1);
                GALLERY = true;
            }, 7 * 1000);
        },
        listen: false
    }
]

var smallTalk = [
    {msg: "Yo Yo, stop with all your non-sense already."},
    {msg: "That's super interesting - instead of booking you should consider writing a book"},
    // {msg: "Great timing to look for a vacation, don't you think?"},
    {msg: "When you want to book. Book. Don't talk"}
]

var clarify = [
    {msg: "Not sure I got it, can you please try again.."},
    {msg: "Could you please explain what you mean?"},
    {msg: "Sorry, I'm still a smart bot. But my mum says that one day I'll be Albert Einstein.."},

]
