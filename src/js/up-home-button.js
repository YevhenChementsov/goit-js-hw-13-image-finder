document.addEventListener('DOMContentLoaded', () => {
  let toUpBtn = document.querySelector('.to-up');

  window.onscroll = function () {
    if (window.pageYOffset > 580) {
      toUpBtn.style.display = 'block';
      toUpBtn.style.visibility = 'visible';
      toUpBtn.style.opacity = 1;
    } else {
      toUpBtn.style.display = 'none';
    }
  };

  toUpBtn.addEventListener('click', function () {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});