import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
function Slider() {
  return (
    <Carousel className='shadow bg-dark'>
      <Carousel.Item interval={2500}>
        <img
          className="carousel-slider-image"
          src="/images/slider1.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="carousel-slider-image"
          src="/images/slider2.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="carousel-slider-image"
          src="/images/slider3.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="carousel-slider-image"
          src="/images/slider4.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="carousel-slider-image"
          src="/images/slider5.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="carousel-slider-image"
          src="/images/slider6.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;