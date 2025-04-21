// Change text content dynamically
function changeText() {
    document.getElementById("description").textContent = "The text has been changed!";
}

// Modify CSS styles via JavaScript
function toggleHighlight() {
    document.getElementById("description").classList.toggle("highlight");
}


function toggleElement() {
    const dynamicDiv = document.getElementById("dynamicElement");
    
    if (dynamicDiv.innerHTML === "") {
        dynamicDiv.innerHTML = "<p>This is a new dynamically added paragraph.</p>";
    } else {
        dynamicDiv.innerHTML = "";
    }
}
