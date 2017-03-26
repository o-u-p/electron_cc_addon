$(function () {
    $("#scanfdialog").dialog({
        autoOpen: false, modal: true, show: "blind", hide: "blind"
    });
});

function ScanFile() {

    var addon = require("hello");
    addon.scanf();
}