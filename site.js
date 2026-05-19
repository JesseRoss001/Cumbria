
(function(){
  if (window.__cumbriaNavInit) return;
  window.__cumbriaNavInit = true;
  function initNav(){
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-menu-toggle');
    const nav = document.querySelector('.main-nav');
    if(!toggle || !header || !nav) return;
    function closeMenu(){
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded','false');
      document.body.classList.remove('nav-open');
    }
    function openMenu(){
      header.classList.add('menu-open');
      toggle.setAttribute('aria-expanded','true');
      document.body.classList.add('nav-open');
    }
    toggle.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      header.classList.contains('menu-open') ? closeMenu() : openMenu();
    });
    nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });
    document.addEventListener('click', function(e){ if(!header.contains(e.target)) closeMenu(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMenu(); });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initNav); else initNav();
})();
