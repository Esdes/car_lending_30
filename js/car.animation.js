  //animation

  let animItem = document.querySelector(".about");
  let car = document.querySelector(".about img.anim-item");

  if(animItem) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 1.2;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        let animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if( (pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemPoint)) {
        car.classList.add('car--active');
      } else {
        car.classList.remove('car--active');
      }
      
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    animOnScroll();
  }