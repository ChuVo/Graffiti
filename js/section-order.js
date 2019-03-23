(function() {
  const elems = document.querySelectorAll('.patterns__items');

  let array = [],
      index = undefined;

  for ( let i = 0; i < elems.length; i++) {
      array.push( elems[i] );  
    }

  function getIndexMouseOver() {
    array.forEach( (i) => {
      i.addEventListener( 'mouseover', () => {        
        index = array.indexOf(i);
        console.log( index + ' = index');        

        changeColor(index);
      });
    });    
  }

  function changeColor(index) {
    index +=2;
    console.log( index + ' = color');
    document.querySelector('.patterns__items:nth-child(' + index + ') .patterns__item').classList.add('patterns__item--color');
  }

  function getIndexMouseOut() {
    array.forEach( (i) => {
      i.addEventListener( 'mouseout', () => {        
        index = array.indexOf(i);
        console.log( index + ' = index');        

        reChangeColor(index);
      });
    });    
  }
  
  function reChangeColor(index) {
    index +=2;
    console.log( index + ' = color');
    document.querySelector('.patterns__items:nth-child(' + index + ') .patterns__item').classList.remove('patterns__item--color');
  }
  
console.log( getIndexMouseOver() );
console.log( getIndexMouseOut() );

}());