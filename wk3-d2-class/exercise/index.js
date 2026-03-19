var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li id='photo'>";
var closeList = "</li>";

for (var i=0; i<6; i++) {
    fileNames.push("winterland"+(i+1));
    photos.push("<img src='./images/"+fileNames[i]+".jpg'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
}

document.getElementById("album").innerHTML = imageList;