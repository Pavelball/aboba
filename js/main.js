$(function () {
    $(".drag").draggable({ containment: "#info" });
});

$(function () {
    $("#sortable").sortable({
        revert: true
    });
    $("ul, li").disableSelection();
});