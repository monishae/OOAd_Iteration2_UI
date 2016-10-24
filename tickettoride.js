var game = new function() {
//    $(document).bind("gameLoaded", function () {
//        $("div.game").addClass("step-1");
//      });

  //   this.readConfig = function() {
         
        
//        $.get("/" + F, function(a) {
//            a += prepareIni(a, standartQuestionPattern);
//            c = parseIni(a);
//            setOriginalQuestions(c);
//            boardgameQuestionPostProcesor(c);
//            t++;
//            0 == t && $(document).trigger("gameLoaded")
//        });
//        $.get("config/" + q, function(a) {
//            b = parseIni(a);
//            t++;
//            0 == t && $(document).trigger("gameLoaded")
//        });
//        $.get("config/" + G, function(a) {
//            h = parseIni(a, function(a) {
//                a = createSound(a);
//                preloadSound(a);
//                return a
//            });
//            t++;
//            0 == t && $(document).trigger("gameLoaded")
//        })
    
$(document).ready(function() {
    //$(".game").css("opacity", 0.1);
    console.log("ready!");
    $("div.game").addClass("step-1");
    $("#step1continuebutton").click(function(e){
          e.preventDefault();
        $.ajax({type: "POST",
                url: "/startgame",
                data: {},
                success:function(result){
          console.log("success");
        }});
      });
});
$(window).load(function() {});
}
;
