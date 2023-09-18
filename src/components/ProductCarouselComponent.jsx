import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./images/carousel/carousel-1.png";
import image2 from "./images/carousel/carousel-2.png";
import image3 from "./images/carousel/carousel-3.png";
import { LinkContainer } from "react-router-bootstrap";

export const ProductCarouselComponent = () => {
  const [index, setIndex] = useState(0);



  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="fixCa">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={image1} alt="image1" style={{height: '300px', objectFit: 'cover'}} />
          <Carousel.Caption>
            <LinkContainer style={{cursor: 'pointer'}} to="/product-details/23333222">
            <h3 > Best seller in Laptop</h3>
            </LinkContainer>
            <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="image2"  style={{height: '300px', objectFit: 'cover'}} />
          <Carousel.Caption>
          <LinkContainer style={{cursor: 'pointer'}} to="/product-details/23333222">
            <h3 > Best seller in Books</h3>
            </LinkContainer>
            <p>World of Eric Carle, Hear Bear Roar 30-Button Animal Sound Book</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt="image3"  style={{height: '300px', objectFit: 'cover'}} />
          <Carousel.Caption>
          <LinkContainer style={{cursor: 'pointer'}} to="/product-details/23333222">
            <h3 > Best seller in camaras</h3>
            </LinkContainer>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur, Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
