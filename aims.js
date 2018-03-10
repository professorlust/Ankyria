l.aims = new Object();
l.aims.storytimer = [];


l.fadein = function(element,num){
    var op = 0;  // initial opacity
    l.aims.storytimer[num] = setInterval(function (){
        if (op >= 0.97){
            clearInterval(l.aims.storytimer[num]);
            element.style.opacity = 1;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.05+0.03;
    }, 100);
}

l.aims.init_story = [
    "You wake up to an incessant beeping... it is coming from a bank of monitors",
    "Stumbling out of bed, you go to turn it off. As you do, you notice where you are-",
    "High up in orbit around a planet",
    "You find the source of the beeping; it's an extremely old, dust covered monitor",
    "Deciphering the flashing lights tells you that your orbit is decaying:",
    "The spaceship is going to crash land within the next few hours",
    "There's nothing you can do but hold on for the ride..."
]

l.aims.people_story = [
    'As you climb over the final hill, you find an inhabited settlement',
    'You walk over to investigate; their sentry sees you long before you arrive',
    'Although they appear uncivilised, they are undoubtedly a subspecies of <i>homo sapiens</i>',
    'The tallest of them - presumably their leader - steps forward and speaks clearly:',
    '"I am BOB.',
    'You ask, "Where are we? Why am I here"',
    'BOB goes back and a hushed discussion takes place.',
    'Finally he turns back to you:',
    'You are on Ankyria - the planet of hope.',
    'For some reason this isn\'t a surprise to you',
    '"Here is our knowledge of what happened:"',
    '<i>The planet Earth was unlivable. We had to evacuate. Our best scientists gathered together. They constructed a new species. This species was constructed to be almost impervious to anything: old age, dehydration, lack of food. These would just send them into a deep sleep. They sent individuals of this species out into the galaxy to find habitable planets. Somebody found this planet and contacted us. They also terraformed it using whatever technology they got. We got here thousands of years later. We never found out who it was.<\\i>'
]

l.endstory = function(){
    l.playing = true;
}

l.tellstory = function(somearray){
    var x=document.getElementById("maingame");
    x.innerHTML
    x.innerHTML="<button id='skipstory' onclick='l.endstory()'>Skip>></button><button id='nextstory' onclick='l.nextstory()'>Next>|></button>";
    var a = 0;
    var displaynext = function(somearray){
        x.innerHTML += "<div style='opacity:0;' id='storytelling"+a+"'>"+l.aims.init_story[a]+"</div>";
        l.fadein(document.getElementById("storytelling"+a),a);
        a++;
        if ((a<somearray.length) && !(l.playing)){
            y=setTimeout(somearray,len(somearray[a])*500);
        } else {
            document.getElementById("skipstory").innerHTML = "Continue>>";
            clearInterval(y)};
    };
    displaynext(somearray);
}

l.aims.initiate = function(){
    l.playing = false;
    l.tellstory(l.aims.init_story);
    var startgame = setInterval(function(){
        if (l.playing){
            l.tabs.list[0][0].settab();
            clearInterval(startgame);
            clearInterval(y);
            l.log("I've landed. It wasn't as rough as I thought. However, my supplies are limited. I need to find some water <i>fast</i>, before what I have runs out. Hopefully I can survive here...");
        }
    },30);
}






