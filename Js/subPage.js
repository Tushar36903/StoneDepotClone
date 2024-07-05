<<<<<<< HEAD
const quickLooks = document.querySelectorAll('.quickLook');
const QL = document.getElementById('QL');
const qlClose = document.querySelector('.qlClose');
var target = '';

quickLooks.forEach(function (quickLook) {
    quickLook.addEventListener('click', function () {
        QL.classList.add('QL_active');
        target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'flex';
    });
});

qlClose.addEventListener('click', function () {
    QL.classList.remove('QL_active');
    document.getElementById(target).style.display = 'none';
=======
const quickLooks = document.querySelectorAll('.quickLook');
const QL = document.getElementById('QL');
const qlClose = document.querySelector('.qlClose');
var target = '';

quickLooks.forEach(function (quickLook) {
    quickLook.addEventListener('click', function () {
        QL.classList.add('QL_active');
        target = this.getAttribute('data-target');
        document.getElementById(target).style.display = 'flex';
    });
});

qlClose.addEventListener('click', function () {
    QL.classList.remove('QL_active');
    document.getElementById(target).style.display = 'none';
>>>>>>> 79fdf174a960b174d7f25fada0809a39199de112
});