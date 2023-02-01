console.log("Anda yeeey");

let btnScroll = document.getElementById('scrollUp');

window.addEventListener("scroll", function scroll() {
    let barraNav = document.getElementById('barra');
    barraNav.classList.toggle("p-4", window.scrollY < 10);
});
window.addEventListener("scroll", function scroll() {
    //------------------Ingles-----------------------
    let _barrai = document.getElementById('barrai');
    _barrai.classList.toggle("ingles", window.scrollY > 100);
    //------------------Figma-----------------------
    let _barraf = document.getElementById('barraf');
    _barraf.classList.toggle("figma", window.scrollY > 110);
    //------------------Unity-----------------------
    let _barrau = document.getElementById('barrau');
    _barrau.classList.toggle("unity", window.scrollY > 120);
    //------------------Processing------------------
    let _barrap = document.getElementById('barrap');
    _barrap.classList.toggle("processing", window.scrollY > 130);
    //------------------HTML-----------------------
    let _barrahtml = document.getElementById('barrahtml');
    _barrahtml.classList.toggle("html", window.scrollY > 140);
    //------------------CSS-----------------------
    let _barracss = document.getElementById('barracss');
    _barracss.classList.toggle("css", window.scrollY > 150);
    //------------------Javascript-----------------------
    let _barrajs = document.getElementById('barrajs');
    _barrajs.classList.toggle("javascript", window.scrollY > 160);

    //------------------------------------2--------------------------------

     //------------------Ingles-----------------------
     let _barrai2 = document.getElementById('barrai2');
     _barrai2.classList.toggle("ingles", window.scrollY > 800);
     //------------------Figma-----------------------
     let _barraf2 = document.getElementById('barraf2');
     _barraf2.classList.toggle("figma", window.scrollY > 810);
     //------------------Unity-----------------------
     let _barrau2 = document.getElementById('barrau2');
     _barrau2.classList.toggle("unity", window.scrollY > 820);
     //------------------Processing------------------
     let _barrap2 = document.getElementById('barrap2');
     _barrap2.classList.toggle("processing", window.scrollY > 830);
     //------------------HTML-----------------------
     let _barrahtml2 = document.getElementById('barrahtml2');
     _barrahtml2.classList.toggle("html", window.scrollY > 840);
     //------------------CSS-----------------------
     let _barracss2 = document.getElementById('barracss2');
     _barracss2.classList.toggle("css", window.scrollY > 850);
     //------------------Javascript-----------------------
     let _barrajs2 = document.getElementById('barrajs2');
     _barrajs2.classList.toggle("javascript", window.scrollY > 860);
});

btnScroll.onclick = function arriba() {
    scrollTo(0,0);
}

document.getElementById('fondo').onclick = function cambiofondo(){
    document.body.style.backgroundImage = "url('../img/gif.gif')";
}

document.getElementById('volver').onclick = function cambiofondo(){
    document.body.style.backgroundImage = "url('../img/fondo.jpg')";
}