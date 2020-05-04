// Add click event
document.querySelector("selector").addEventListener("click", function () { });
$("selector").on("click", function () { });

$("selector").click(function () { });

// Add hover event
document.querySelector("selector").addEventListener();
$("selector").hover();

// Get HTML tag attribute value
document.querySelector("selector").getAttribute('tag-attribute');
$("selector").attr('tag-attribute');

// Set HTML tag attribute value
document.querySelector("selector").setAttribute("tag-attribute", "new attribute value");
$("selector").attr("tag-attribute", "new attribute value");

// Get number of child elements
document.querySelectorAll("selector > children-selector").length;
$("selector > children-selector").length;

document.querySelector("selector").childElementCount;
$("selector").children().length;

// Change string to int/float
Number("123");

// Execute code by time
setInterval(function() {}, 1000);