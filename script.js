let x = document.getElementById('menu');
let menuBtn = document.querySelector('.menuBtn');
let closeBtn = document.querySelector('.closeBtn')

function openMenu(){
    x.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

function closeMenu(){
    x.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}