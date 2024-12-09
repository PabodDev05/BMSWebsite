document.getElementById('navbarToggler').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.add('show');
    document.getElementById('navbarOverlay').classList.add('show');
});

document.getElementById('navbarClose').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.remove('show');
    document.getElementById('navbarOverlay').classList.remove('show');
});

document.getElementById('navbarOverlay').addEventListener('click', function () {
    document.getElementById('navbarNav').classList.remove('show');
    document.getElementById('navbarOverlay').classList.remove('show');
});