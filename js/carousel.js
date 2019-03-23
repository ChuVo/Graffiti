( function() {
  const gallery = document.querySelector('.carousel__images'),
        allImages = document.querySelectorAll('.carousel__item');

  setTimeout(function() {
    const btnPrev = document.querySelector('.button-prev'),
          btnNext = document.querySelector('.button-next');          

    let originalPosition = 0,
        indexSlide = 0,
        arrayImage = [];

    (function() {
      for( let i=0; i < allImages.length; i++) {
        if ( i% 2 !==0) {
          arrayImage.push(allImages[i]);
        }            
      }
    }());   

    btnNext.addEventListener( 'click', slideRigth);
    btnPrev.addEventListener( 'click', slideLeft);
    
    function slideLeft() {
      if ( indexSlide > 0) {
        
        originalPosition -= arrayImage[indexSlide-1].width/10;
        gallery.style.transform = `translateX(-${originalPosition }rem)`;

        indexSlide--;

        if ( indexSlide === 0){
          originalPosition = 0;
        }
      }
    }

    function slideRigth() {
      if ( indexSlide < arrayImage.length-1) {
        
        originalPosition += arrayImage[indexSlide].width/10;
        gallery.style.transform = `translateX(-${originalPosition}rem)`;

        indexSlide++;
      }
    }
  }, 2000);

  gallery.addEventListener("click", function(event) {
    const holst = document.querySelector('.section-order__canvas');
    let src = event.target.src; 

    holst.style.background = `url("${src}") top right /cover  no-repeat`; 
  });

}());


