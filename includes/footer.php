    <footer class="foot">
        <span>Thank you for reading this.</span>
    </footer>
</div>
<script>
(function () {
    // The red margin line is inked in as the reader scrolls down the page.
    var body = document.body;
    function ink() {
        var h = window.scrollY + window.innerHeight * 0.75;
        body.style.setProperty("--ink-h", Math.min(h, document.documentElement.scrollHeight) + "px");
    }
    ink();
    window.addEventListener("scroll", ink, { passive: true });
    window.addEventListener("resize", ink);

    // The timeline draws itself, and the letter gets signed, the first time each scrolls into view.
    function revealOnView(el, threshold) {
        if (!el) return;
        if ("IntersectionObserver" in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
                });
            }, { threshold: threshold });
            io.observe(el);
        } else {
            el.classList.add("in");
        }
    }
    revealOnView(document.querySelector(".plan"), 0.25);
    revealOnView(document.querySelector(".letter .signatures"), 0.6);
})();
</script>
<script src="js/fun.js"></script>
</body>
</html>
