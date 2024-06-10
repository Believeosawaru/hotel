document.querySelector('.menu');

function openMenu() {
    document.querySelector('.menu').classList.add('menu-transit')
}

function closeMenu() {
    document.querySelector('.menu').classList.remove('menu-transit');
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector('.scroller').classList.add('scroller-transit')
    } else {
        document.querySelector('.scroller').classList.remove('scroller-transit')
    }
}


window.onscroll = () => {
    scrollFunction();
}

function headToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}