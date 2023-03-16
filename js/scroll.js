
function scrollToContent() {
  var contentElements = document.querySelectorAll('.hero-content');
  var lastContentElement = contentElements[contentElements.length - 1];
  if (lastContentElement) {
    lastContentElement.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSlideshow() {
  var element = document.getElementById("slideshow-title");
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}