
buttoncolor=["green","red","yellow","blue"];
userClickedPattern=[];
var level=0;
var randomchosencolor
gamePattern=[];
$(".btn").click(function(){
    var randomid=$(this).attr("id");
    var sound= new Audio("sounds/"+randomid+".mp3");
    sound.play();
    $("#"+randomid).fadeOut(100).fadeIn(100);
    userClickedPattern.push(randomid);
    console.log(userClickedPattern);
    animatepress(randomid,100);
    checkAnswer((userClickedPattern.length-1));
});

function animatepress(abc,n){
    $("#"+abc).addClass("pressed");
    var sound= new Audio("sounds/"+abc+".mp3");
    sound.play();
    setTimeout(function(){
        $('#'+abc).removeClass("pressed");
    },n);
}

function nextSequence()
{
    var n = Math.random();
    n= Math.floor(n*4);
    
    randomchosencolor=buttoncolor[n];
    gamePattern.push(randomchosencolor);
    animatepress(randomchosencolor,1000);
    console.log(gamePattern,"HEy");
    level++;
    $("#level-title").text("Level "+level);
}
$(document).keypress(function(event){
    
    
    nextSequence();

});




function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
       if (userClickedPattern.length===gamePattern.length){
       setTimeout(function(){
        nextSequence();
       },100);
       userClickedPattern=[];
    }
    console.log("Success");
}
    else{
        $("#level-title").text("Game Over,Press Any Key To Restart");
        var sound= new Audio("sounds/wrong.mp3");
        sound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startover();
    
    }
    
}

function startover(){
    gamePattern=[];
    level=0;
    userClickedPattern=[];
}
//nextSequence();

