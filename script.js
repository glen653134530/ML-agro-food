
// Minimal JS: mobile menu toggle and smooth behavior
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mainNav');
  btn && btn.addEventListener('click', function(e){
    e.preventDefault();
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });
});
