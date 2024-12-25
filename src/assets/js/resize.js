function siteResizeFunction() {
  initVars();

  prevWindowWidth = windowWidth;
  windowWidth = $window.width();

  if (prevWindowWidth > 980 && windowWidth <= 980) {
    
  }
  if (prevWindowWidth < 980 && windowWidth >= 980) {
    
  }
}

console.log('resize-enable');

$(function () {
  $(window).on('resize', siteResizeFunction);
  siteResizeFunction();
});
