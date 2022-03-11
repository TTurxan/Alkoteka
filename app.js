window.addEventListener("scroll", function () {
  var nav = this.document.querySelector("#nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function () {

    // $('.slider').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //       // You can unslick at a given breakpoint now by adding:
    //       // settings: "unslick"
    //       // instead of a settings object
    //     ]
    //   });
      
$('.sliderone').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });
  $('.slidertwo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  });

      // $('.slider').slick({
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
      // });
      AOS.init({
        duration: 3000,
        once: true,
      });



      $(".navbar").on("click","a" ,function(){
            $(".navbar a.active").removeClass("active")
            $(this).addClass("active")
      })
});

function test() {
  if (window.scrollY > 500) {
       console.log(window.scrollY>500)
       alert("vcfg")
  } else {
    
  }
}

test()

