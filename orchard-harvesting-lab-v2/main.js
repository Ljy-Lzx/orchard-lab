const nav=document.getElementById('nav'),menu=document.querySelector('.menu'),links=document.querySelector('.nav nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>30));
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));