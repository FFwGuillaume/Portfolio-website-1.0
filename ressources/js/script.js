document.addEventListener('DOMContentLoaded', function () {
    // code for smooth scrolling
    document.querySelector('a[href="#main"]').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Scroll smoothly to the target section
        document.querySelector('#main').scrollIntoView({
            behavior: 'smooth'
        });
    });

    const pupils = document.querySelectorAll(".pupil");
    const header = document.querySelector("header");

    function movePupils(e) {
        const { pageX, pageY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (pageX - (innerWidth / 2)) / 30;
        const y = (pageY - (innerHeight / 2)) / 30;

        pupils.forEach((pupil) => {
            const transformX = x + "px";
            const transformY = y + "px";
            pupil.style.transform = "translate3d(" + transformX + "," + transformY + ", 0px)";
        });
    }

    function startPupilsDesktop() {
        window.addEventListener("mousemove", movePupils);
    }

    function stopPupilsDesktop() {
        pupils.forEach((pupil) => {
            pupil.style.transition = "transform 0.3s ease-out";
            pupil.style.transform = "translate3d(0, 0, 0)";
        });
        window.removeEventListener("mousemove", movePupils);
    }

    function startPupilsMobile() {
        window.addEventListener("deviceorientation", movePupils);
    }

    function stopPupilsMobile() {
        pupils.forEach((pupil) => {
            pupil.style.transition = "transform 0.3s ease-out";
            pupil.style.transform = "translate3d(0, 0, 0)";
        });
        window.removeEventListener("deviceorientation", movePupils);
    }

    header.addEventListener("mouseenter", startPupilsDesktop);
    header.addEventListener("mouseleave", stopPupilsDesktop);

    // Check if the device is a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        header.removeEventListener("mouseenter", startPupilsDesktop);
        header.removeEventListener("mouseleave", stopPupilsDesktop);
        header.addEventListener("touchstart", startPupilsMobile);
        header.addEventListener("touchend", stopPupilsMobile);
    }
});
