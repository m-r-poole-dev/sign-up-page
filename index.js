//jshint esversion:6

window.addEventListener("load", (evt) =>{
  var showMenu = false;
  domStrings = {
    hamburger: document.querySelector('#hamburger'),
    close: document.querySelector('#close'),
    nav: document.querySelector(".mobile-nav"),
    topSection: document.querySelector(".top-section"),
    mockups: document.querySelector('#mockups'),
    introWords: document.querySelector(".intro-words")

  };

  domStrings.hamburger.addEventListener("click", (evt)=>{
      if (!showMenu){
          domStrings.hamburger.style.display = "none";
          domStrings.close.style.display = "block";
          domStrings.nav.style.display = "block";
          domStrings.mockups.style.display="none";
          domStrings.topSection.classList.add("fade-top-section");
          domStrings.introWords.classList.remove("intro-words");
          showMenu =true;
        }
  });

  domStrings.close.addEventListener("click", (evt)=>{
    if(showMenu){
      domStrings.hamburger.style.display = "block";
      domStrings.close.style.display = "none";
      domStrings.nav.style.display = "none";
      domStrings.mockups.style.display="inline-block";
      domStrings.topSection.classList.remove("fade-top-section");
      domStrings.introWords.classList.add("intro-words");
      showMenu =false;
    }
});
});
