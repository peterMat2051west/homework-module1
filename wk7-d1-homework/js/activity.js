$(document).ready(function () {
    $("td").click(function () {
        var content = $(this).text();

        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")) {
                var colIndex = $(this).index();
                var cliffName = $("thead th").eq(colIndex).text();

                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + content + " <span style='background-color:#9ed034;color:#fff;padding:2px 6px;border-radius:3px;font-size:0.85em;'>at " + cliffName + "</span></p>");

            } else {
                $('#result p:contains(' + content + ')').remove();

                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});
