window.addEventListener("DOMContentLoaded", () => {
  //////////////////////////////////////////////////////

  const target = document.querySelector(".sns > li:last-child");
  target.classList.toggle("on");

  const gnb = document.querySelector("nav.gnb");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      // console.log(lastScrollY);
      // console.log("we are going down");
      gnb.classList.add("nav--hidden");
    } else {
      // console.log("we are going up");
      gnb.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });

  const ellipseBtn = document.querySelector(".ellipse");
  console.log(`ellipseBtn: `, ellipseBtn);

  ellipseBtn.addEventListener("click", () => {
    // gnb.classList.toggle("mobileOn");
    console.log(`clickckckckcsa;lkjf`);
    gnb.classList.toggle("mobileOn");
  });
});
