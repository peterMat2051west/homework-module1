var partners = [
    { image: "images/partners/partner1.png", alt: "Partner 1" },
    { image: "images/partners/partner2.png", alt: "Partner 2" },
    { image: "images/partners/partner3.png", alt: "Partner 3" },
    { image: "images/partners/partner4.png", alt: "Partner 4" },
    { image: "images/partners/partner5.png", alt: "Partner 5" },
    { image: "images/partners/partner6.png", alt: "Partner 6" }
];

var output = "";

for (var i = 0; i < partners.length; i++) {
    output += '<li class="partner">';
    output += '<img src="' + partners[i].image + '" alt="' + partners[i].alt + '">';
    output += '</li>';
}

document.getElementById("partners").innerHTML = output;
