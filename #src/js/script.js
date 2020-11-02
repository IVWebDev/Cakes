function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
// Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}};


//header burger
$(document).ready(function () {
   $('.header-burger').click(function (event) {
      $('.header-burger,.header-menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   // Catalog slider
   $('.catalog-label').click(function () {
      $('.catalog-label').removeClass('active');
      $(this).toggleClass('active');
   });
   // Filling slider
   $('.filling-label').click(function () {
      $('.filling-label').removeClass('active');
      $(this).toggleClass('active');
   });

});


// Review slider
var swiper = new Swiper('.swiper-container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});




//catalog-menu
// $('label').click(function (e) {
//    e.preventDefault();
//    $('label').removeClass('active');
//    $(this).addClass('active');
// });
//catalog
// $(function () {

//    let filter = $("[data-filter]");
//    filter.on("click", function () {
//       let cat = $(this).data('filter');
//       if (cat == 'all') {
//          $("[data-cat]").removeClass('hide');
//       } else {
//          $("[data-cat]").each(function () {

//             let workCat = $(this).data('cat');

//             if (workCat != cat) {
//                $(this).addClass('hide');
//             } else {
//                $(this).removeClass('hide');
//             }
//          });
//       }
//    });
// });

