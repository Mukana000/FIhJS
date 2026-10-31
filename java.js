
/* Name this external file gallery.js */

function upDate(previewPic) {
    // Change the background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";

    // Change the text
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Restore the original background
    document.getElementById("image").style.backgroundImage =
        "linear-gradient(135deg, #8e68ff, #ffdf4d)";

    // Restore the original text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

// Function to add tabindex to all images
function addTabIndex() {
    console.log("Page loaded - Adding tabindex");

    let images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

// Run function when page loads
window.onload = addTabIndex;
