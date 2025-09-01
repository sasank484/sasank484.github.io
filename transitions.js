<script type="text/javascript">
(function () {
  try {
    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var supportsVT = (typeof document.startViewTransition === 'function');
    var DURATION = 320; // ms

    var links = document.querySelectorAll('nav a[href]');
    for (var k = 0; k < links.length; k++) {
      links[k].addEventListener('click', function (e) {
        var href = this.getAttribute('href');

        // Let external links / anchors behave normally
        if (!href || href.charAt(0) === '#' || /^https?:\/\//i.test(href)) return;

        // If already on that page, do nothing
        var current = (location.pathname.split('/').pop() || 'index.html');
        if (href === current) return;

        e.preventDefault();

        if (supportsVT) {
          document.startViewTransition(function () {
            window.location.href = href;
          });
        } else {
          // Fallback fade you already have in CSS
          document.body.classList.add('fade-out');
          setTimeout(function () { window.location.href = href; }, DURATION);
        }
      });
    }
  } catch (err) {
    console.error('Transition init error:', err);
  }
})();
</script>
