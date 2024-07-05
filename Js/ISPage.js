<<<<<<< HEAD
function handleScroll() {
    var boxes = document.querySelectorAll('.IS_Stones');

    for (var i = 0; i < boxes.length; i++) {
        var windowHeight = window.innerHeight;
        var boxTop = boxes[i].offsetTop;
        var scrollY = window.scrollY || window.pageYOffset; // Cross-browser compatible scroll position

        var boxPoint = -150;

        if (boxTop < windowHeight + scrollY - boxPoint) {
            boxes[i].classList.add('active');
        } else {
            boxes[i].classList.remove('active');
        }
    }
}

=======
function handleScroll() {
    var boxes = document.querySelectorAll('.IS_Stones');

    for (var i = 0; i < boxes.length; i++) {
        var windowHeight = window.innerHeight;
        var boxTop = boxes[i].offsetTop;
        var scrollY = window.scrollY || window.pageYOffset; // Cross-browser compatible scroll position

        var boxPoint = -150;

        if (boxTop < windowHeight + scrollY - boxPoint) {
            boxes[i].classList.add('active');
        } else {
            boxes[i].classList.remove('active');
        }
    }
}

>>>>>>> 79fdf174a960b174d7f25fada0809a39199de112
window.addEventListener('scroll', handleScroll);