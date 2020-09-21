function openNav() {
  var width = screen.width;
  if(width<1080){
    document.getElementById("mySidenav").style.width = "45%";
    document.getElementById("main").style.marginLeft = "16%";
  }else {
    document.getElementById("mySidenav").style.width = "35%";
    document.getElementById("main").style.marginLeft = "16%";
  }

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var width = screen.width;
    if(width<1080){
      document.getElementById("main").style.marginLeft = "13.2%";
    }else{
      document.getElementById("main").style.marginLeft = "7.8%";
    }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            closeNav();
        } else {
            openNav();
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
