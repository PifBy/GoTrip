var owl = $(".owl-carousel");
owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        item: 3,
        startPosition: 1
        });

$(".slider-btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

$(".slider-btn--prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});