//Getting all the h2 elements
const ui = document.getElementsByTagName("h2");

// using all the h2 in the ui array to make the navigation in header

document.addEventListener("DOMContentLoaded", function() {
    const threes = document.getElementById("navbar__list");
    const y = document.createElement('a');
    y.href = "index.html";
    y.innerHTML = '<img src="Images/f8f12f5f569642a3b798e95d8a37b88b.png" height = "65px" width = "65px"> </img> ';
    threes.appendChild(y);
    threes.firstElementChild.firstElementChild.className = "logo1";
    for (let i = 0; i < ui.length; i++) {
        se = document.createElement('li');
        se.innerHTML = ui[i].textContent;
        threes.appendChild(se);
    }

});

// giving each navigation element a class

document.addEventListener("DOMContentLoaded", function() {
    const ti = document.getElementById("navbar__list").firstElementChild;
    ti.className = "logo";

    const one = document.getElementById("navbar__list").firstElementChild.nextElementSibling;
    one.className = "sect1";

    const tw = document.getElementById("navbar__list").firstElementChild.nextElementSibling.nextElementSibling;
    tw.className = "sect2";

    const thre = document.getElementById("navbar__list").firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
    thre.className = "sect3";

    const four = document.getElementById("navbar__list").firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    four.className = "sect4";

});

// getting each section position as the page is scrolling and giving each section the class active when they are close to the top

setTimeout(function act() {

    document.addEventListener("scroll", function() {

        const q1 = document.getElementById("section1");
        const t13 = document.getElementsByClassName("sect1");
        let position = q1.getBoundingClientRect();
        let top = position.top;
        let bottom = position.bottom;
        let left = position.left;


        if (top < 126) {
            q1.className = "active";

            t13[0].classList.add("fog");
        }
        if (top < -180 || top > 170) {
            q1.classList.remove("active");
            t13[0].classList.remove("fog");
        }

        const q2 = document.getElementById("section2");
        const t14 = document.getElementsByClassName("sect2");
        let position2 = q2.getBoundingClientRect();
        let toptwo = position2.top;
        let lefttwo = position2.left;

        if (toptwo < 125) {
            q2.classList.add("active");
            t14[0].classList.add("fog");
        }

        if (toptwo < -160 || toptwo > 170) {
            q2.classList.remove("active");
            t14[0].classList.remove("fog");
        }


        const q3 = document.getElementById("section3");
        const t15 = document.getElementsByClassName("sect3");
        let pos3 = q3.getBoundingClientRect();
        let topthree = pos3.top;
        let bottomsthree = pos3.bottom;
        let leftthree = pos3.left;

        if (topthree < 130) {
            q3.classList.add("active");
            t15[0].classList.add("fog");
        }
        if (topthree < -150 || topthree > 180) {
            q3.classList.remove("active");
            t15[0].classList.remove("fog");
        }

        const q4 = document.getElementById("section4");
        const t16 = document.getElementsByClassName("sect4");
        let pos4 = q4.getBoundingClientRect();
        let topfour = pos4.top;
        let bottomsfour = pos4.bottom;
        let leftfour = pos4.left;

        if (topfour < 135) {
            q4.classList.add("active");
            t16[0].classList.add("fog");
        }
        if (topfour < -120 || topfour > 160) {
            q4.classList.remove("active");
            t16[0].classList.remove("fog");
        }

    });

}, 1400);

// detecting clicks on the nav elements and scrolling to the section in a smooth way


setTimeout(function() {
    const click1 = document.getElementsByClassName("sect1");
    click1[0].addEventListener('click', function() {
        const clicksectionone = document.getElementById("section1");
        clicksectionone.scrollIntoView({
            behavior: "smooth"
        });
    })
}, 1556);


setTimeout(function() {
    const click2 = document.getElementsByClassName("sect2");
    click2[0].addEventListener('click', function() {
        const clicksectiontwo = document.getElementById("section2");
        clicksectiontwo.scrollIntoView({ behavior: "smooth" });
    })
}, 1550);

setTimeout(function() {
    const click3 = document.getElementsByClassName("sect3");
    click3[0].addEventListener('click', function() {
        const clicksectionthree = document.getElementById("section3");
        clicksectionthree.scrollIntoView({ behavior: "smooth" });
    });
}, 1550);

setTimeout(function() {
    const click4 = document.getElementsByClassName("sect4");
    click4[0].addEventListener('click', function() {
        const clicksectionfour = document.getElementById("section4");
        clicksectionfour.scrollIntoView({ behavior: "smooth" });
    })
}, 1550);