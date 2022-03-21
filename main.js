/////// Languages Dropdown

function isOdd(num) {
    return num % 2;
}

let x = 0;
function dropdownFunc() {
    console.log('button clicked');
    x = x + 1;
    console.log(x);
    if (isOdd(x)) {
        document.getElementById('dropdown').style.display = 'block';
    } 
    else {
        document.getElementById('dropdown').style.display = 'none';
    }
}

// Languages

let english = document.getElementById('english');
let french = document.getElementById('french');

let buttonAbout = document.getElementById('btn-about');
let buttonProjects = document.getElementById('btn-projects');
let buttonContacts = document.getElementById('btn-contacts');
let homeHeadTitle = document.getElementById('homeHeadTitle');
let homeH1 = document.getElementById('homeH1');
let typeWriter = document.getElementById('typeWriter');

english.onclick = () => {
    setLanguage('english');
    localStorage.setItem('lang', 'english');
    location.reload();
}

french.onclick = () => {
    setLanguage('french');
    localStorage.setItem('lang', 'french');
    console.log(typeWriter);
    location.reload();
}

function setLanguage(getLanguage) {
    if (getLanguage === 'french') {
        homeHeadTitle.innerHTML = 'Accueil'
        buttonAbout.innerHTML = 'À propos';
        buttonProjects.innerHTML = 'Projets';
        homeH1.innerHTML = 'Bonjour, Je Suis Arif Anas';
    }
    else {
        homeHeadTitle.innerHTML = 'Home';
        buttonAbout.innerHTML = 'About';
        buttonProjects.innerHTML = 'Projects';
        homeH1.innerHTML = 'Hello, I Am Anas Arif';
    }
}

// backgrounds

let root = document.documentElement;
const images = [
    'url(./img/img-1.webp)',
    'url(./img/img-2.webp)',
    'url(./img/img-3.webp)',
    'url(./img/img-4.webp)',
    'url(./img/img-5.webp)',
    'url(./img/img-6.webp)',
    'url(./img/img-7.webp)',
    'url(./img/img-8.webp)',
    'url(./img/img-9.webp)',
    'url(./img/img-10.webp)',
    'url(./img/img-11.webp)',
    'url(./img/img-12.webp)'
]
const bg = images[Math.floor(Math.random() * images.length)];
root.style.setProperty('--backgroundImage', bg)

// Type Effect 
// I grabed it from codepens! you can find it with more type effects 
// here https://css-tricks.com/snippets/css/typewriter-effect/

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    
    var elements = document.getElementsByClassName('typewrite');
    if (localStorage.getItem('lang') === 'french') {
        typeWriter.setAttribute('data-type', '[ "Je Suis un Développeur Web Front-End Junior.", "Et Technicien Informatique."]')
    }
    else {
        typeWriter.setAttribute('data-type', '["I Am a Junior Front-End Web Developer.", "And IT Technician."]')
    }
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
    setLanguage(localStorage.getItem('lang'));
};

// links

function aboutLink() {
    location.href = "about.html";
}
function projectLink() {
    location.href = "projects.html";
}
function contactLink() {
    location.href = "contact.html";
}
function brandLink() {
    location.href ='index.html';
}