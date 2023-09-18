import React from "react";
import cartImage1 from "./images/tablets-category.png";
import cartImage2 from "./images/monitors-category.png";
import cartImage3 from "./images/games-category.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

function CategoryCardComponent({ category, idx }) {
  const images = [
    cartImage1,
    cartImage2,
    cartImage3,
    cartImage1,
    cartImage2,
    cartImage3,
    cartImage2,
    cartImage1,
  ];
  return (
    <Card>
      <Card.Img variant="top" src={images[idx]} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to={'/product-lists'}>
        <Button variant="primary">Go To Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default CategoryCardComponent;
