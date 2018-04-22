var container = document.querySelector( 'h1' );
var palette = [ '#C62828', '#00C853', '#C62828', '#4527A0'];
var paletteIndex = 0;

setInterval( function() {
  
  container.className = 'no-transition';
  
  setTimeout( function() {
	container.style.color = palette[paletteIndex];
	container.className = 'transition';
	paletteIndex += 1;
	paletteIndex %= palette.length;
  }, 100 );
  
  
}, 2500 );