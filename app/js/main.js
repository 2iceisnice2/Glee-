$(function() {

  $('.shop__btn').on('click', function(){
    $('.shop__btn').removeClass('shop__btn--active');
    $(this).addClass('shop__btn--active');
  });


  $('.btn-list').on('click', function(){
    $('.shop__list').addClass('shop__list--list');
  });

  $('.btn-grid').on('click', function(){
    $('.shop__list').removeClass('shop__list--list');
  })

  

  $(".recent__star").rateYo({
    starWidth: "11px",
    straHeight: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
  });

  $(".product-card__star").rateYo({
    starWidth: "20px",
    straHeight: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
  });

  $(".price__input").ionRangeSlider({
    onChange: function (data) {
      $('.price__from').text(data.from);
      $('.price__to').text(data.to);
  },


  onStart: function (data) {
    $('.price__from').text(data.from);
    $('.price__to').text(data.to);
  }
  });

//product-details meter
  $('.product__meter--minus').on('click', () => {
    let counter = $('.product__meter');
    let newValue = Number(counter.val()) - 1;
    newValue > 0 && counter.val(newValue);
});

$('.product__meter--plus').on('click', () => {
    let counter = $('.product__meter');
    let newValue = Number(counter.val()) + 1;
    counter.val(newValue);
});
//

  $('.product-slide__list').slick({
   asNavFor: '.product-slide__biglist',
   vertical: true,
   focusOnSelect: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: false,

 });

 $('.product-slide__biglist').slick({
   asNavFor: '.product-slide__list',
   slidesToScroll: 1,
   slidesToShow: 1,
   arrows: false,
});



  $('.product-slider__items').slick({
     dots: true,
     arrows: false,
     
  });

  $('.client-slider__items').slick({
    arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
  });



  $('.blog-slider__items').slick({
    arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
  });


//mixitup
var containerEl1 = document.querySelector('.week-products');
var containerEl2 = document.querySelector('.new-design');
var config = {
  controls: {
    scope: 'local'
  }
};

   var mixer = mixitup(containerEl1, config);
  var mixer1 = mixitup(containerEl2, config);
})