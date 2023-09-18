import React from "react";
import { ProductCarouselComponent } from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/categoryCardComponent";
import { Container, Row } from "react-bootstrap";

function HomePage() {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Software",
    "Cameras",
    "Book",
    "Vidoes",
  ];
  return (
    <div>
      <ProductCarouselComponent />
      <Container>
      <Row xs={1} md={2} className="g-4 mt-5">
      {
        categories.map((category, idx) =>  <CategoryCardComponent  key={idx} category={category}  idx={idx} />)
      }
      </Row>
      </Container>
      
    </div>
  );
}

export default HomePage;
