var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click',function() {
    overlay.style.display = 'block';
});

btnClose.addEventListener('click',function() {
    overlay.style.display = 'none';
})