const inspectScroll = () => {
  let $win = $(window);

  function checkScroll() {
    if ($win.scrollTop() > 66.67) {
      $win.off("scroll", checkScroll);
      $(".newsletter-cont").fadeIn(2000);
    }
  }
  $win.scroll(checkScroll);
};

const timeoutNews = () => {
  let hours = 0.167
  let now = new Date().getTime();
  let setNews = localStorage.getItem("setNews");
  let newscont =$("#newsletter-bar")
  newscont.animate({bottom: '-100%' }, "slow");

  if (setNews == null) {
    localStorage.setItem("setNews", now);
  } else {
    if (now - setNews > hours * 60 * 60 * 1000) {
        console.log('kesini');
        
      localStorage.clear();
      localStorage.setItem("setNews", now);
    }
  }
};

const checkLocal = () => {
let newscont =$("#newsletter-bar")
 if (localStorage.getItem("setNews")) {
    newscont.hide()
 }
}

$( document ).ready(function() {
    inspectScroll(); 
    checkLocal()
});
