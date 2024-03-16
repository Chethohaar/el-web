// $('.portfolio-button').mousedown(function(){
//     timeout = setInterval(function(){
//         window.scrollBy(0,-1); // May need to be -1 to go down
//     }, 0); // Play around with this number. May go too fast

//     return false;
// });
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Clear the form fields
    document.getElementById("feedback-form").reset();

    // Set a timeout to clear the form again after 2 seconds
    setTimeout(function() {
        document.getElementById("feedback-form").reset();
    }, 2000);
        });