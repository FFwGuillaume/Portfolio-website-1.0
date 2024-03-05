// code for smooth scrolling

document.addEventListener('DOMContentLoaded', function () {
    // code for smooth scrolling
    document.querySelector('a[href="#main"]').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll smoothly to the target section
        document.querySelector('#main').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const pupils = document.querySelectorAll(".pupil");
    const header = document.querySelector("header");

    function movePupils(e) {
        pupils.forEach((pupil) => {
            const rect = pupil.getBoundingClientRect();
            const x = (e.pageX - rect.left) / 30;
            const y = (e.pageY - rect.top) / 30;
            const transformX = x + "px";
            const transformY = y + "px";
            pupil.style.transform = "translate3d(" + transformX + "," + transformY + ", 0px)";
        });
    }

    function startPupils() {
        window.addEventListener("mousemove", movePupils);
    }

    function stopPupils() {
        pupils.forEach((pupil) => {
            pupil.style.transition = "transform 0.3s ease-out";
            pupil.style.transform = "translate3d(0, 0, 0)";
        });
        window.removeEventListener("mousemove", movePupils);
    }

    header.addEventListener("mouseenter", startPupils);
    header.addEventListener("mouseleave", stopPupils);
});
