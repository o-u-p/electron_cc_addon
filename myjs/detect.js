$(function () {
    // this initializes the dialog (and uses some common options that I do)
   
});

$("#startdetect").click(function () {
    var i=0;
    $('#startdetect').after('<div class="progress progress-striped progress-success active"><div id="processbar" class="progress-bar" style="width: 0%;"></div></div>')
    var processbar = document.getElementById("processbar");
    var addon = require("hello");
    addon.hh();
    var id = setInterval(frame, 10);
    function frame(){
        if(i>=100){
            clearInterval(id);
        } else {
            i++;
            processbar.style.width = i + "%";
        }
    }
});