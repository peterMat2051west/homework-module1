$(document).ready(function () {
    $("tbody td").each(function () {
        if ($(this).text() !== "Not Available" && $(this).index() > 0) {
            $(this).css("cursor", "pointer");
        }
    });

    $("tbody td").click(function () {
        if ($(this).text() === "Not Available" || $(this).index() === 0) {
            return;
        }
        $(this).toggleClass("selected");
    });
});
