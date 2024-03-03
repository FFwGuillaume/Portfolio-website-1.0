// code for smooth scrolling

document.addEventListener('DOMContentLoaded', function() {
    // code for smooth scrolling
    document.querySelector('a[href="#main"]').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll smoothly to the target section
        document.querySelector('#main').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
