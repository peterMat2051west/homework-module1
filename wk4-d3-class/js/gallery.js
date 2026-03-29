var openTag = "<strong>";
var closeTag = "</strong>";
var closeText = "Click This To Close";

var cliffInfo = [
    "Overlooking the Pacific Ocean, West Cliff offers breathtaking sea views and dramatic coastal rock formations. Popular activities include sea kayaking, tide pool exploration, and sunset watching from the cliff's edge.",
    "Nestled high in the mountain range, North Cliff provides panoramic views of snow-capped peaks and alpine meadows. Visitors enjoy hiking, wildlife photography, and camping under the stars at this elevated retreat.",
    "Rising above a winding river valley, East Cliff is known for its lush greenery and cascading waterfalls. River kayaking, fishing, and guided nature walks are among the most popular activities here.",
    "South Cliff features a stunning canyon landscape carved over millions of years. The layered red rock formations and desert flora create a one-of-a-kind setting for canyon exploration, rock climbing, and photography."
];

var cliffNames = ["West Cliff", "North Cliff", "East Cliff", "South Cliff"];

var infoBox = document.getElementById("info-box");
var infoHeading = document.getElementById("info-heading");
var infoText = document.getElementById("info-text");
var infoClose = document.getElementById("info-close");

var descriptionBars = document.querySelectorAll(".description-bar");

for (var i = 0; i < descriptionBars.length; i++) {
    descriptionBars[i].setAttribute("data-index", i);

    descriptionBars[i].addEventListener("click", function () {
        var index = this.getAttribute("data-index");
        infoHeading.innerHTML = openTag + cliffNames[index] + closeTag;
        infoText.innerHTML = cliffInfo[index];
        infoBox.style.visibility = "visible";
    });
}

infoClose.addEventListener("click", function (e) {
    e.preventDefault();
    infoBox.style.visibility = "hidden";
});
