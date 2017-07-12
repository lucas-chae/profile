(function() {
    'user strict' ;
    
    var hello = document.getElementById('hello');
    var blur = document.getElementById('overlay');
    var windowHeight = window.innerHeight;
    var isScroll = false;
    
    var latestScroll = 0;
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    
    window.requestAnimationFrame = requestAnimationFrame;
    
    var init = function() {
        window.addEventListener('scroll', function() {
            latestScroll = window.scrollY;
            checkScroll();
        }, false);
    }
        
    var checkScroll = function() {
        if(!isScroll) {
            window.requestAnimationFrame(update);
            
        }
        isScroll = true;
    }
    
    var update = function() {
        currentScroll = latestScroll;
        isScroll = false;
        var helloScroll = currentScroll / 1.6;
        var blurScroll = currentScroll * 1.5;
        
        hello.style.transform = 'translate3d(0, ' + helloScroll + 'px, 0)';
        blur.style.opacity = (blurScroll / windowHeight - .1).toFixed(2);
        if(blur.style.opacity >= 1) {
            blur.style.opacity = 1;
        }
    }
    
    init();
        })();
