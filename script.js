// CHANGE BETWEEN SECTIONS
function showSection(sectionId) {

    // Hide all sections
    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionId)
        .classList.add("active");

    // Move page to top
    window.scrollTo(0, 0);
    
    // Haptic feedback on mobile
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}


// QUIZ ANSWER
function answer() {

    document.getElementById("quiz-result").innerHTML =
        "😂 Haha! Whatever your answer is, we both know the truth! ❤️";

}


// CONFETTI CELEBRATION
function celebrate() {

    for (let i = 0; i < 100; i++) {
        createConfetti();
    }

}


function createConfetti() {

    let confetti = document.createElement("div");

    confetti.classList.add("confetti");


    // Random position
    confetti.style.left =
        Math.random() * 100 + "vw";


    // Random colors
    let colors = [
        "#ff4081",
        "#ffeb3b",
        "#4caf50",
        "#2196f3",
        "#9c27b0"
    ];


    confetti.style.backgroundColor =
        colors[
            Math.floor(Math.random() * colors.length)
        ];


    // Random size
    confetti.style.width =
        Math.random() * 10 + 5 + "px";

    confetti.style.height =
        Math.random() * 10 + 5 + "px";


    // Add confetti to the page
    document.body.appendChild(confetti);


    // Remove confetti after animation
    setTimeout(function() {
        confetti.remove();
    }, 3000);

}


// UPLOAD MEMORY PHOTOS
function uploadPhoto(inputElement, photoId) {

    let file = inputElement.files[0];
    
    if (file) {
        // Create a FileReader to read the file
        let reader = new FileReader();
        
        reader.onload = function(event) {
            // Get the image element and update its src
            document.getElementById(photoId).src = event.target.result;
            
            // Save to localStorage so it persists
            localStorage.setItem("memory_" + photoId, event.target.result);
            
            // Show success message
            alert("✨ Photo updated successfully!");
        };
        
        // Read the file as a data URL
        reader.readAsDataURL(file);
    }
}


// LOAD SAVED PHOTOS ON PAGE LOAD
function loadSavedPhotos() {
    for (let i = 1; i <= 4; i++) {
        let savedPhoto = localStorage.getItem("memory_photo" + i);
        if (savedPhoto) {
            document.getElementById("photo" + i).src = savedPhoto;
        }
    }
}


// Initialize on page load
window.addEventListener("load", loadSavedPhotos);