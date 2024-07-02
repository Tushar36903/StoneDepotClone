document.addEventListener("DOMContentLoaded", function() {
    var productImgs = document.querySelectorAll('.product-img--main');

    productImgs.forEach(function(img) {
        var scale = img.getAttribute('data-scale');
        var imgDiv = document.createElement('div');
        imgDiv.classList.add('product-img--main__image');
        imgDiv.style.backgroundImage = 'url(' + img.getAttribute('data-image') + ')';
        img.appendChild(imgDiv);

        img.addEventListener('mouseover', function() {
            imgDiv.style.transform = 'scale(' + scale + ')';
        });

        img.addEventListener('mouseout', function() {
            imgDiv.style.transform = 'scale(1)';
        });

        img.addEventListener('mousemove', function(e) {
            var rect = img.getBoundingClientRect();
            var xPercent = ((e.pageX - rect.left) / rect.width) * 100;
            var yPercent = ((e.pageY - rect.top) / rect.height) * 100;
            imgDiv.style.transformOrigin = xPercent + '% ' + yPercent + '%';
        });
    });
});