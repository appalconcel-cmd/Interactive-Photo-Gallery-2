function upDate(previewPic) {
    // 1. Target the main display box and the caption div
    var displayBox = document.getElementById("image");
    var captionBox = document.getElementById("caption");

    // 2. Remove the initial "Hover to Start" text if it exists
    displayBox.innerHTML = "";

    // 3. Update the background image and the caption text
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
    captionBox.innerHTML = previewPic.alt;

    console.log("Sticky update: " + previewPic.alt);
}

// unUndo is kept here as a placeholder but does nothing,
// ensuring the previous image "stays" until the next hover.
function unUndo() {
    // No code here = No reset!
}
