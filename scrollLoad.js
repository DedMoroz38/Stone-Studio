window.addEventListener('scroll', () => {
    let pages = document.querySelectorAll('.container');
    pages = [...pages, ...document.querySelectorAll('.seoHeadings')];
    for(let i = 0; i < pages.length; i++){
      const windowHeigth = window.innerHeight;
      const pageTop = pages[i].getBoundingClientRect().top;
      const revealPoint = 50;

      if(pageTop < windowHeigth - revealPoint){
        pages[i].classList.add('active');
      } else {
        pages[i].classList.remove('active');
      }
    }
});