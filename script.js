function menuFunction() {
  document.querySelector('.adaptive-menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
  let element = document.querySelector('#title-id');

  if(element.classList.contains('hidden')) {
    titleHideFunction();
  }
  else {
  setTimeout(titleHideFunction,200);
  }
}

function titleHideFunction() {
  document.querySelector('.section-title').classList.toggle('hidden');
  document.querySelector('.skills-section-content').classList.toggle('menu-view-adaption');
}