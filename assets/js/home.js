gsap.utils.toArray(".section").forEach((section, i) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 70%",
        toggleClass: {
          targets: gsap.utils.toArray("li")[i],
          className: "active"
        }
      }
    });
  });
  
//   document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll(".img-direita-animada, .img-esquerda-animada");
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("show");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.1
//     });
    
//     images.forEach(image => {
//         observer.observe(image);
//     });
// });