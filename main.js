const headerHeight = document.querySelector('.header').clientHeight;

document.querySelectorAll('.header__links-box').forEach(button => {
  button.addEventListener('click', () => {
    const scrollValue = convertert(button.dataset.scrollPage);
    window.scrollTo({
      top: scrollValue + headerHeight,
      behavior: "smooth"
    });
  })
});



const convertert = (pageNumber) => {
  return ((pageNumber - 1) * 98) / (100 / document.documentElement.clientHeight);
}
