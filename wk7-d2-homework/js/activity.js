$(document).ready(function () {
    $("td").click(function () {
        var content = $(this).text();

        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");

            if ($(this).hasClass("tdhighlight")) {
                var colIndex = $(this).index();
                var cliffName = $("thead th").eq(colIndex).text();

                $('#result').append("<p>" + content + " at " + cliffName + "</p>");
                $('#activityModal').modal('show');

            } else {
                $('#result p:contains(' + content + ')').remove();
            }

            if ($('#result').has('p').length) {
                $('#activityModal').modal('show');
            }
        }
    });

    $('#getInfoBtn').click(function () {
        alert("Info request sent for your selected activities!");
        $('#activityModal').modal('hide');
    });
});
