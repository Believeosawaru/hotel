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

function showFirst() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector('aside').classList.add('show-one');
    } else {
        document.querySelector('aside').classList.remove('show-one');
    }
}

function showSecond() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            document.querySelector('.openings').classList.add('show-two');
    } else {
        document.querySelector('.openings').classList.remove('show-two');
    }
}

window.onscroll = () => {
    scrollFunction();
    showFirst();
    showSecond();
}

function headToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}