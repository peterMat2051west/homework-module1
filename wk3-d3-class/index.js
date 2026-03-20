var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>";
var openCaptionTag = "<p class='caption'>";
var closeCaptionTag = "</p>";
var openDescTag = "<p class='description'>";
var closeDescTag = "</p>";

var captionTexts = [
	"Winter Wonderland 1 - Snowy Forest Path",
	"Winter Wonderland 2 - Frozen Lake",
	"Winter Wonderland 3 - Snowy Mountain Peak",
	"Winter Wonderland 4 - Snowy Village",
	"Winter Wonderland 5 - Snowy Bridge",
	"Winter Wonderland 6 - Snowy Cabin",
	"Winter Wonderland 7 - Snowy River",
	"Winter Wonderland 8 - Snowy Field",
	"Winter Wonderland 9 - Snowy Trees",
	"Winter Wonderland 10 - Snowy Sunset",
];

var descTexts = [
	"A peaceful snowy forest path with tall trees covered in snow",
	"A frozen lake with ice formations and snow-covered banks",
	"A majestic mountain peak with snow-capped summit",
	"A charming snowy village with cozy houses",
	"A picturesque bridge over a frozen stream",
	"A rustic cabin in the snowy wilderness",
	"A flowing river partially frozen in winter",
	"A vast snowy field with gentle hills",
	"Snow-covered trees creating a winter wonderland",
	"A beautiful sunset over a snowy landscape",
];

for (var i = 0; i < 10; i++) {
	fileNames.push("winterland1");
	photos.push("<img src='./images/" + fileNames[i] + ".jpg'>");
	var currentOpenList = "<li id='photo" + (i + 1) + "'>";
	image =
		currentOpenList +
		photos[i] +
		openCaptionTag +
		captionTexts[i] +
		closeCaptionTag +
		openDescTag +
		descTexts[i] +
		closeDescTag +
		closeList;
	imageList.push(image);
}

document.getElementById("album").innerHTML = imageList.join("");
