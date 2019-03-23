(function() {
  const form1 = document.querySelector('.patterns__items:nth-child(2)'),
        form2 = document.querySelector('.patterns__items:nth-child(3)'),
        form3 = document.querySelector('.patterns__items:nth-child(4)');

  form1.addEventListener('mouseover', () => {
    changeColor(2);
  });

  form1.addEventListener('mouseout', () => {
    reChangeColor(2);
  });

  form2.addEventListener('mouseover', () => {
    changeColor(3);
  });

  form2.addEventListener('mouseout', () => {
    reChangeColor(3);
  });

  form3.addEventListener('mouseover', () => {
    changeColor(4);
  });

  form3.addEventListener('mouseout', () => {
    reChangeColor(4);
  });

  function changeColor(index) {
    document.querySelector('.patterns__items:nth-child(' + index + ') .patterns__item ').classList.add('patterns__item--color');   
  }
  
  function reChangeColor(index) {
    document.querySelector('.patterns__items:nth-child(' + index + ') .patterns__item ').classList.remove('patterns__item--color');
  }  

}());