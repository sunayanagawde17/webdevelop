(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('1').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('1').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('1').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('1').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('1').attachEvent("onmousewheel", scrollHorizontally);
    }
})();