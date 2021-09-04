$(".nav-item").click(function (e) {
  $(".nav-item").siblings().removeClass("active");
  $(this).toggleClass("active");
});
// ***
// this is a test
// let list = document.querySelectorAll("li a.nav-link");
//   list.forEach((li) => {
//     li.addEventListener("click", (e) => {
//       list.forEach((item) => {
//         if (item == e.target) {
//           item.classList.add("active");
//         } else {
//           item.classList.remove("active");
//         }
//       });
//     });
//   });
//****
