// mathjax.js
(function() {
  var slideshow = remark.create({});
  
  slideshow.on('afterShowSlide', function (slide) {
    // Trigger MathJax to re-render math on the current slide
    if (window.MathJax) {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, slide.content[0]]);
    }
  });
})();