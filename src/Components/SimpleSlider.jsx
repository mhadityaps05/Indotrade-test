import React from "react"
import Slider from "react-slick"

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
  }

  return (
    <div className="max-w-5xl mx-auto rounded-lg shadow-lg">
      <Slider {...settings}>
        <div>
          <img
            src="https://image1ws.indotrading.com/s3/webp/adminbanner/slide4-indo.png"
            alt="benner"
            className="w-full aspect-[3/1] object-cover"
          />
        </div>
        <div>
          <img
            src="https://image1ws.indotrading.com/s3/webp/adminbanner/slide1-indo.jpg"
            alt="benner"
            className="w-full aspect-[3/1] object-cover"
          />
        </div>
        <div>
          <img
            src="https://image1ws.indotrading.com/s3/webp/adminbanner/slide3-indo.jpg"
            alt="benner"
            className="w-full aspect-[3/1] object-cover"
          />
        </div>
      </Slider>
    </div>
  )
}
